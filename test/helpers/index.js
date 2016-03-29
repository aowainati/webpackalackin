import { execFile } from 'child_process';

// TODO: Formalize
const VERBOSE = process.env.VERBOSE === '1';

/**
* Calls `callback` once Mocha has loaded its environment.
                                                         *
* See https://github.com/mochajs/mocha/issues/764
 */
export function withMocha(callback) {
  if ('beforeEach' in global) {
    callback();
    return;
  }

  setImmediate(() => {
    withMocha(callback);
  });
}

/**
* Run a command in a Mocha hook.
 */
export function execInHook(hook, args, timeout) {
  const prettyCommand = args.join(' ');

  hook(prettyCommand, function(done) {
    this.timeout(timeout);

    if (!VERBOSE) {
      process.stdout.write(`  ${prettyCommand}… `);
    }

    // https://github.com/nodejs/node/issues/5637
    let exited = false;
    function onExit(error, stdout, stderr) {
      if (exited) return;
      exited = true;

      if (VERBOSE) {
        process.stdout.write(`\n< ${prettyCommand}\n`);
      } else if (error) {
        process.stdout.write('ERROR\n\n');
        if (stdout) process.stderr.write(stdout);
        if (stderr) process.stderr.write(stderr);
      } else {
        process.stdout.write('done\n');
      }

      done(error);
    }

    const proc = execFile(args[0], args.slice(1), onExit);
    proc.on('exit', code => {
      // Give execFile a chance to call its callback.
      setImmediate(() => {
        if (code === 0) {
          onExit();
        } else {
          onExit(new Error(`Exit code ${code}`));
        }
      });
    });

    if (VERBOSE) {
      process.stdout.write(`> ${prettyCommand}\n`);
      proc.stdout.pipe(process.stdout);
      proc.stderr.pipe(process.stderr);
    }
  });
}

/**
* Run a command as a global after hook.
 */
export function execAfter(args, timeout) {
  execInHook(after, args, timeout);
}

/**
* Run a command as a global before hook.
 */
export function execBefore(args, timeout) {
  execInHook(before, args, timeout);
}

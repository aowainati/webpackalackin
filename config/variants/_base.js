import * as _ from 'lodash';
import * as childProcess from 'child_process';
import * as path from 'path';

function execSync(command) {
  return childProcess.execSync(command, {encoding: 'UTF-8'}).trim();
}

// We expose the commit sha for more straightforward build reproduction and
// tracing.
let FULL_COMMIT = execSync('git rev-parse HEAD');
let SHORT_COMMIT = FULL_COMMIT.substr(0, 7);
if (!_.isEmpty(execSync('git status --porcelain'))) {
  FULL_COMMIT  = `${FULL_COMMIT}+`;
  SHORT_COMMIT = `${SHORT_COMMIT}+`;
}

/**
 * Base configuration that all variants extend.
 */
export default {
  rootDir: path.resolve(__dirname, '..', '..'),

  fullCommit:  FULL_COMMIT,
  shortCommit: SHORT_COMMIT,
  // We need a monotonically increasing sequence for build identifiers. # of
  // commits is a great proxy for that, considering that the only things that
  // actually care about a build number are for builds against master.
  buildNum: null,

  // The endpoint to hit for API requests.
  apiEndpoint: null,

  // The S3 bucket to sync built assets to.
  s3Bucket: null,

  // Whether or not react dev mode should be enabled
  reactDevEnabled: false,
};

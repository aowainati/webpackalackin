(( __CONFIG_INCLUDED__ )) && return
__CONFIG_INCLUDED__=1

# Make all of our configuration values available as env vars, prefixed with
# config_.
vars=$(./node_modules/.bin/babel-node -e "
  const config = require('./config');
  console.log(config.stringifyForShell(config.current));
")
set -a
eval $vars
set +a

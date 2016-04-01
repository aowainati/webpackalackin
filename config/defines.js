import * as config from '.';

// Replacements for https://github.com/mjackson/babel-plugin-transform-define
export default config.flatten(config.current, '__CONFIG__.', '.');

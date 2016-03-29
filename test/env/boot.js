require('babel-register');

// We want the test environment to be as close as possible to the runtime
// environment, but that's a bit difficult (it's running in Node).
require('babel-polyfill');
// Note that we explicitly DO NOT require React yet.  Integration tests _should
// not_ include React (since they're communicating over the Appium bridge), and
// unit tests need to mock out parts of it.

import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import chaiJsonEqual from 'chai-json-equal';
import chaiSubset from 'chai-subset';

// Clean up mocha stack traces.
import 'mocha-clean';

// # Chai

// We prefer Chai's `expect` interface.
global.expect = chai.expect;
// Give us all the info!
chai.config.truncateThreshold = 0;

// ## http://chaijs.com/plugins/chai-as-promised
//
// Adds `eventually` to perform assertions on promises.  TL;DR:
//
//   * expect(aPromise).to.eventually.deep.equal({abc: 123})
//   * expect(aPromise).to.eventually.be.rejectedWith(TypeError, /failure/)
//
chai.use(chaiAsPromised);

// ## http://chaijs.com/plugins/chai-json-equal
//
// Adds JSON equality assertions.  TL;DR:
//
//   * expect(anObject).to.jsonEqual(anotherObject)
//
chai.use(chaiJsonEqual);

// ## http://chaijs.com/plugins/chai-subset
//
// Adds object subset assertions.  TL;DR:
//
//   * expect(anObject).to.containSubset({abc: 123})
//
chai.use(chaiSubset);

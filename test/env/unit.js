import * as chai from 'chai';
import * as enzyme from 'enzyme';
import * as sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';

import { withMocha } from '../helpers';

import './base';

// # Global Environment

// We expect React to be made available globally (see src/boot for rationale).
global.React = require('react');
// Enzyme is made available globally as `shallow`, 'cause that's the only
// interface you should be using from it!
global.shallow = enzyme.shallow;

// # Chai

// ## http://chaijs.com/plugins/sinon-chai
//
// Adds assertions for sinon spies.  TL;DR:
//
//   * expect(aSpy).to.have.been.calledWith('abc', 123)
//
chai.use(sinonChai);

// ## https://github.com/producthunt/chai-enzyme
//
// Adds assertions for enzyme wrappers.  TL;DR:
//
//   * expect(rendered).to.contain(<Text>Ohai</Text>)
//

chai.use(chaiEnzyme());

// # Sinon

withMocha(() => {

  beforeEach(() => {
    // Prefer accessing sinon via the `sandbox` global.
    global.sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    global.sandbox.restore();
    delete global.sandbox;
  });

});

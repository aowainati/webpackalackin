import { Interactions, reducer } from 'redux-interactions';

import deepUpdate from 'deep-update';

export default new class TheButton extends Interactions {
  initialState = {
    buttonPressed: false,
  };

  @reducer
  pushButton(state) {
    // A bit overkill to use deepUpdate here, but useful as an example
    return deepUpdate(state, ['buttonPressed'], {
      $set: !state.buttonPressed,
    });
  }
}

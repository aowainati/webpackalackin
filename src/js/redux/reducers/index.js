import combinedReduction from 'combined-reduction';

import * as interactions from '../interactions';

export default combinedReduction({
  theButton: interactions.theButton.reducer,
});

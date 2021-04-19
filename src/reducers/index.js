import { combineReducers } from 'redux';

import memolist from './memolist';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  memolist,
  visibilityFilter,
});

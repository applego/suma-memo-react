import { combineReducers } from 'redux';

import memos from './memos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  memos,
  visibilityFilter,
});

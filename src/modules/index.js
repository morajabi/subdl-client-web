import { combineReducers } from 'redux';
import searchReducer from './search';

export default (apollo) => combineReducers({
  search: searchReducer,
  apollo,
});

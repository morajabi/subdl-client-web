import rootReducer from '../';
import searchReducer from '../search';

describe('rootReducer', () => {
  it('should return correct inital state containing all reducers` keys', () => {
    const apolloReducer = () => ({});
    expect(rootReducer(apolloReducer)(undefined, {})).toEqual({
      search: searchReducer(undefined, {}),
      apollo: {},
    });
  });
});

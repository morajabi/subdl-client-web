import rootReducer from '../';
import searchReducer from '../search';

describe('rootReducer', () => {
  it('should return correct inital state containing all reducers` keys', () => {
    expect(rootReducer(undefined, {})).toEqual({
      search: searchReducer(undefined, {}),
    });
  });
});

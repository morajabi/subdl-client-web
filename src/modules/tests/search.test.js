import reducer, {
  SEARCH_QUERY_CHANGED,
  // action creators
  setSearchQuery,
  // selectors
  searchQuerySelector,
} from '../search';

describe('Search [redux module]', () => {
  describe('action creators', () => {
    describe('setSearchQuery', () => {
      it('should generate correct action', () => {
        expect(setSearchQuery('query')).toEqual({
          type: SEARCH_QUERY_CHANGED,
          value: 'query',
        });
      });
    });
  });

  describe('selectors', () => {
    describe('searchQuerySelector', () => {
      it('should return correct value from state', () => {
        const state = { searchQuery: 'query' };

        expect(searchQuerySelector(state)).toBe('query');
      });
    });
  });

  describe('reducer', () => {
    it('should return correct initial state', () => {
      expect(reducer(undefined, {})).toEqual({
        searchQuery: '',
      });
    });

    it('should change searchQuery value correctly on appropriate action', () => {
      const action = {
        type: SEARCH_QUERY_CHANGED,
        value: 'new query',
      };
      const nextState = { searchQuery: 'new query' };

      expect(reducer(undefined, action)).toEqual(nextState);
    });
  });
});

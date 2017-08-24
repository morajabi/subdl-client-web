import reducer, {
  SEARCH_QUERY_CHANGED,
  DEBOUNCED_SEARCH_QUERY_CHANGED,
  SEARCH_PAGE_QUERY_CHANGED,
  // action creators
  setSearchQuery,
  setDebouncedSearchQuery,
  setSearchPageQuery,
  // selectors
  searchQuerySelector,
  debouncedSearchQuerySelector,
  searchPageQuerySelector,
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

    describe('debouncedSearchQuery', () => {
      it('should generate correct action', () => {
        expect(setDebouncedSearchQuery('query')).toEqual({
          type: DEBOUNCED_SEARCH_QUERY_CHANGED,
          value: 'query',
        });
      });
    });

    describe('searchPageQuery', () => {
      it('should generate correct action', () => {
        expect(setSearchPageQuery('query')).toEqual({
          type: SEARCH_PAGE_QUERY_CHANGED,
          value: 'query',
        });
      });
    });
  });

  describe('selectors', () => {
    describe('searchQuerySelector', () => {
      it('should return correct value from state', () => {
        const state = { search: { searchQuery: 'query' } };

        expect(searchQuerySelector(state)).toBe('query');
      });
    });

    describe('debouncedSearchQuerySelector', () => {
      it('should return correct value from state', () => {
        const state = { search: { debouncedSearchQuery: 'query' } };

        expect(debouncedSearchQuerySelector(state)).toBe('query');
      });
    });

    describe('searchPageQuerySelector', () => {
      it('should return correct value from state', () => {
        const state = { search: { searchPageQuery: 'query' } };

        expect(searchPageQuerySelector(state)).toBe('query');
      });
    });
  });

  describe('reducer', () => {
    it('should return correct initial state', () => {
      expect(reducer(undefined, {})).toEqual({
        searchQuery: '',
        debouncedSearchQuery: '',
        searchPageQuery: '',
      });
    });

    it('should change searchQuery value correctly on appropriate action', () => {
      const action = {
        type: SEARCH_QUERY_CHANGED,
        value: 'new query',
      };
      const nextState = { searchQuery: 'new query' };

      expect(reducer(undefined, action)).toMatchObject(nextState);
    });

    it('should change debouncedSearchQuery value correctly on appropriate action', () => {
      const action = {
        type: DEBOUNCED_SEARCH_QUERY_CHANGED,
        value: 'new query',
      };
      const nextState = { debouncedSearchQuery: 'new query' };

      expect(reducer(undefined, action)).toMatchObject(nextState);
    });

    it('should change searchPageQuery value correctly on appropriate action', () => {
      const action = {
        type: SEARCH_PAGE_QUERY_CHANGED,
        value: 'new query',
      };
      const nextState = { searchPageQuery: 'new query' };

      expect(reducer(undefined, action)).toMatchObject(nextState);
    });
  });
});

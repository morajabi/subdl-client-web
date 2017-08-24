export const SEARCH_QUERY_CHANGED = 'search/SEARCH_QUERY_CHANGED';
export const DEBOUNCED_SEARCH_QUERY_CHANGED =
  'search/DEBOUNCED_SEARCH_QUERY_CHANGED';
export const SEARCH_PAGE_QUERY_CHANGED = 'search/SEARCH_PAGE_QUERY_CHANGED';

// - state
type State = {
  searchQuery: string,
  debouncedSearchQuery: string,
  searchPageQuery: string,
};

const initialState: State = {
  searchQuery: '',
  debouncedSearchQuery: '',
  searchPageQuery: '',
};

// - reducer
export default (state = initialState, action?): State => {
  switch (action.type) {
    case SEARCH_QUERY_CHANGED:
      return { ...state, searchQuery: action.value };

    case DEBOUNCED_SEARCH_QUERY_CHANGED:
      return { ...state, debouncedSearchQuery: action.value };

    case SEARCH_PAGE_QUERY_CHANGED:
      return { ...state, searchPageQuery: action.value };

    default:
      return state;
  }
};

// - action creators
export const setSearchQuery = value => ({
  type: SEARCH_QUERY_CHANGED,
  value,
});

export const setDebouncedSearchQuery = value => ({
  type: DEBOUNCED_SEARCH_QUERY_CHANGED,
  value,
});

export const setSearchPageQuery = value => ({
  type: SEARCH_PAGE_QUERY_CHANGED,
  value,
});

// - selectors
export const searchQuerySelector = state => state.search.searchQuery;
export const debouncedSearchQuerySelector = state =>
  state.search.debouncedSearchQuery;
export const searchPageQuerySelector = state => state.search.searchPageQuery;

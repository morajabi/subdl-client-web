export const SEARCH_QUERY_CHANGED = "counter/INCREMENT";


// - state
type State = {
  searchQuery: string
};

const initialState: State = {
  searchQuery: '',
};

// - reducer
export default (state = initialState, action?): State => {
  switch (action.type) {
    case SEARCH_QUERY_CHANGED:
      return { ...state, searchQuery: action.value };

    default:
      return state;
  }
};

// - action creators
export const setSearchQuery = (value) => ({
  type: SEARCH_QUERY_CHANGED,
  value,
})

// - selectors
export const searchQuerySelector = state => state.searchQuery;

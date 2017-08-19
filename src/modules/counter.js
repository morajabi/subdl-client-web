export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";

// - reducer
export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

// - action creators
export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

// - selectors
export const counterSelector = state => state.counter;
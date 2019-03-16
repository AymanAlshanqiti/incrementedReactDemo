import * as actionTypes from "../actions/actionTypes";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, actoin) => {
  switch (actoin.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    default:
      return state;
  }
};

export default reducer;

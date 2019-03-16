import * as actionTypes from "../actions/actionTypes";

const initialState = {
  log: 0
};

const reducer = (state = initialState, actoin) => {
  switch (actoin.type) {
    case actionTypes.LOG:
      return {
        ...state,
        log: state.log + 1
      };

    default:
      return state;
  }
};

export default reducer;

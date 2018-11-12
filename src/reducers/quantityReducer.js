import * as actions from '../actions/actionTypes';

const initialState= {
    count: 0
};

const quantityReducer= (state= initialState, action)=> {
    switch (action.type) {
        case actions.INCREMENT:
          return {
            ...state,
            count: state.count + 1
          };
        case actions.DECREMENT:
          return {
            ...state,
            count: state.count - 1
          };
        default:
          return state;
      }
}

export default quantityReducer
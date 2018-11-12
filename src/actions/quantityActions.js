import * as actions from './actionTypes';

export function increment() {
    return {
      type: actions.INCREMENT
    };
  }
  
  export function decrement() {
    return {
      type: actions.DECREMENT
    };
  }
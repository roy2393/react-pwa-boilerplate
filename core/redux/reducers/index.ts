import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  RootState,
} from '../actions/types';

const initialState: RootState = {
  counterValue: 5,
};
export default function rootReducer(state = initialState, action): RootState {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        ...action.payload,
      };
    case COUNTER_DECREMENT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

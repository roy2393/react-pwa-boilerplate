import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  RootState
} from './types';

interface IncreaseCounterAction {
  type: typeof COUNTER_INCREMENT;
  payload: RootState
}

export type IncreaseCounterActionType = IncreaseCounterAction;
export const increaseCounter = (payload: RootState) => ({
  type: COUNTER_INCREMENT,
  payload
})

interface DecreaseCounterAction {
  type: typeof COUNTER_DECREMENT;
  payload: RootState
}

export type DecreaseCounterActionType = DecreaseCounterAction;
export const decreaseCounter = (value: number) => ({
  type: COUNTER_DECREMENT,
  payload: value
})
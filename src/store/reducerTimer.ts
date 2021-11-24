import { ActionTypes, TAction } from '@store/actions';

export type TTimerState = {
  value: number, // время (в сек) с начала тестирования
  updateInterval: number | undefined, // интервал обновления таймера (window.setIntrval)
};

const initialState: TTimerState = {
  value: 0,
  updateInterval: undefined
};

const reducerTimer = (state: TTimerState = initialState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.RESET_TIMER: {
      return initialState;
    }
    case ActionTypes.START_TIMER: {
      return {...state, updateInterval: action.payload};
    }
    case ActionTypes.STOP_TIMER: {
      return {...state, updateInterval: undefined};
    }
    case ActionTypes.TICK_TIMER: {
      return {...state, value: state.value + 1};
    }
    default:
      return {...state};
  }
};

export default reducerTimer;

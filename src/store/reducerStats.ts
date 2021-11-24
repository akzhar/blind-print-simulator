import { ActionTypes, TAction } from '@store/actions';

export type TStatsState = {
  speed: number, // скорость набора текста, знаков / мин
  accuracy: number, // точность ввода, % символов набранных без ошибок
};

const initialState: TStatsState = {
  speed: 0,
  accuracy: 100
};

const reducerStats = (state: TStatsState = initialState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.RESET_STATS: {
      return initialState;
    }
    case ActionTypes.UPDATE_SPEED: {
      return {...state, speed: action.payload};
    }
    case ActionTypes.UPDATE_ACCURACY: {
      return {...state, accuracy: action.payload};
    }
    default:
      return {...state};
  }
};

export default reducerStats;

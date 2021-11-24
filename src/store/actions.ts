import { API_URL } from '@consts/const';

import { TState } from './reducer';

export type TAction = {
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
};

export enum APIresStatus {
  OK = 'success',
  NOK = 'error'
}

enum APIresErrorCode {
  CONTENT_SIZE_LIMIT_EXCEEDED = 11,
  FORBIDDEN_TEMPORARY = 21,
  FORBIDDEN_PERMANENT = 22,
  INTERNAL_ERROR = 31
}

type TjsonRes = {
  status: APIresStatus,
  errorCode?: APIresErrorCode,
  text: string
}
export enum ActionTypes {
  // timer
  RESET_TIMER = 'reset timer',
  START_TIMER = 'start timer',
  STOP_TIMER = 'stop timer',
  TICK_TIMER = 'tick timer',
  // symbols
  RESET_SYMBOLS = 'reset symbols',
  SAVE_SYMBOLS = 'save symbols',
  SAVE_WRONG_SYMBOL_ID = 'save wrong symbol\'s id',
  GOTO_NEXT_SYMBOL = 'go to next symbol',
  END_TYPING = 'end typing',
  // message
  RESET_MESSAGE = 'reset message',
  SET_WARNING_MESSAGE = 'set warning message',
  SET_INFO_MESSAGE = 'set info message',
  SHOW_MESSAGE = 'show message',
  HIDE_MESSAGE = 'hide message',
  // stats
  RESET_STATS = 'reset stats',
  UPDATE_SPEED = 'update speed',
  UPDATE_ACCURACY = 'update accuracy'
}

const ActionCreator = {
  reset: () => {
    return (dispatch: (action: TAction) => VoidFunction, getState: () => TState) => {
      const { timer } = getState();
      window.clearInterval(timer.updateInterval);
      dispatch({ type: ActionTypes.RESET_TIMER});
      dispatch({ type: ActionTypes.RESET_SYMBOLS});
      dispatch({ type: ActionTypes.RESET_MESSAGE});
      dispatch({ type: ActionTypes.RESET_STATS});
    }
  },
  timerStart: () => {
    return (dispatch: (action: TAction) => void, getState: () => TState) => {
      const { timer } = getState();
      if (!timer.updateInterval) {
        const timerUpdateInterval = window.setInterval(() => {
          dispatch({ type: ActionTypes.TICK_TIMER});
        }, 1000);
        dispatch({ type: ActionTypes.START_TIMER, payload: timerUpdateInterval });
      }
    }
  },
  fetchSymbols: () => {
    return async (dispatch: (action: TAction) => void) => {
      try {
        const res = await fetch(`${API_URL}/get`);
        const { status: resStatus, text: resBody, errorCode: resErrorCode }: TjsonRes = await res.json();
        if (resStatus === APIresStatus.OK) {
          dispatch({ type: ActionTypes.SAVE_SYMBOLS, payload: resBody.split('') });
        } else {
          const error = resBody;
          const label = `Код ошибки ${resErrorCode}:`;
          const text = `Ошибка при загрузке данных ${error}.`;
          dispatch({ type: ActionTypes.SET_WARNING_MESSAGE, payload: { label, text } });
          dispatch({ type: ActionTypes.SHOW_MESSAGE});
        }
      } catch (error) {
        const label = 'Упс...';
        const text = `Ошибка при загрузке данных: ${error}.`;
        dispatch({ type: ActionTypes.SET_WARNING_MESSAGE, payload: { label, text } });
        dispatch({ type: ActionTypes.SHOW_MESSAGE});
      }
    }
  },
  checkTypedSymbol: (typedSymbol: string) => {
    return (dispatch: (action: TAction) => void, getState: () => TState) => {
      const { symbols: { items, currentItemID, wrongItemsIDs }, timer } = getState();
      const currentSymbol: string = items[currentItemID];
      const isWrong = typedSymbol !== currentSymbol;
      const isWrongFirstTime = isWrong && !wrongItemsIDs.includes(currentItemID.toString());
      const isTestCompleted = (currentItemID >= items.length - 1) && !isWrong;
      if (isWrong) {
        const label = 'Опечатка...';
        const text = `'${typedSymbol}' вместо '${currentSymbol}'`;
        dispatch({ type: ActionTypes.SET_WARNING_MESSAGE, payload: { label, text } });
        dispatch({ type: ActionTypes.SHOW_MESSAGE});
      } else {
        dispatch({ type: ActionTypes.HIDE_MESSAGE});
        dispatch({ type: ActionTypes.GOTO_NEXT_SYMBOL });
      }
      if (isWrongFirstTime) {
        dispatch({ type: ActionTypes.SAVE_WRONG_SYMBOL_ID });
      }
      if (isTestCompleted) {
        window.clearInterval(timer.updateInterval);
        dispatch({ type: ActionTypes.STOP_TIMER });
        dispatch({ type: ActionTypes.END_TYPING });
        const label = '^_^';
        const text = 'Попробуй пройти тест заново и улучшить свой результат';
        dispatch({ type: ActionTypes.SET_INFO_MESSAGE, payload: { label, text } });
        dispatch({ type: ActionTypes.SHOW_MESSAGE});
      }
    }
  },
  set404WarningMessage: () => {
      return (dispatch: (action: TAction) => void) => {
      const label = 'Код ошибки 404:';
      const text = 'Запрошенный ресурс не был найден...';
      dispatch({ type: ActionTypes.SET_WARNING_MESSAGE, payload: { label, text } });
      dispatch({ type: ActionTypes.SHOW_MESSAGE});
    }
  },
  updateSpeed: () => {
    return (dispatch: (action: TAction) => void, getState: () => TState) => {
      const { symbols: { currentItemID }, timer } = getState();
      const passedSymbolsCount = currentItemID;
      const speed = passedSymbolsCount ? Math.round(passedSymbolsCount / timer.value * 60) : 0;
      dispatch({ type: ActionTypes.UPDATE_SPEED, payload: speed });
    }
  },
  updateAccuracy: () => {
    return (dispatch: (action: TAction) => void, getState: () => TState) => {
      const { symbols: { items, wrongItemsIDs } } = getState();
      const accuracy = 100 - (wrongItemsIDs.length / items.length * 100);
      dispatch({ type: ActionTypes.UPDATE_ACCURACY, payload: accuracy });
    }
  }
};

export default ActionCreator;

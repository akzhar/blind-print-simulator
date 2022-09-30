import { ActionTypes, TAction } from '@store/actions';

export type TSymbolsState = {
  items: string[], // массив символов для ввода
  wrongItemsIDs: string[], // массив индексов всех неправильно введенных символов (каждый учитывается только 1 раз)
  currentItemID: number, // индекс текущего символа для ввода
  isCurrentWrong: boolean, // флаг - текущий символ введен неверно
  isAllSymbolsTyped: boolean, // флаг - все символы введены, конец тестирования
};

const initialState: TSymbolsState = {
  items: [],
  wrongItemsIDs: [],
  currentItemID: 0,
  isCurrentWrong: false,
  isAllSymbolsTyped: false
};

const reducerSymbols = (state: TSymbolsState = initialState, action: TAction) => {
  switch (action.type) {
    case ActionTypes.RESET_SYMBOLS: {
      return initialState;
    }
    case ActionTypes.RESET_SYMBOLS_BUT_KEEP_TEXT: {
      return { ...initialState, items: state.items };
    }
    case ActionTypes.SAVE_SYMBOLS: {
      return {...state, items: action.payload};
    }
    case ActionTypes.SAVE_WRONG_SYMBOL_ID: {
      const wrongItemsID = state.currentItemID.toString();
      return {...state, wrongItemsIDs: [...state.wrongItemsIDs, wrongItemsID], isCurrentWrong: true};
    }
    case ActionTypes.GOTO_NEXT_SYMBOL: {
      const nextItemID = state.currentItemID + 1;
      return {...state, currentItemID: nextItemID, isCurrentWrong: false};
    }
    case ActionTypes.END_TYPING: {
      return {...state, isAllSymbolsTyped: true};
    }
    default:
      return {...state};
  }
};

export default reducerSymbols;

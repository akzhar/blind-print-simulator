import { combineReducers } from 'redux';

import reducerTimer, { TTimerState } from '@store/reducerTimer';
import reducerSymbols, { TSymbolsState } from '@store/reducerSymbols';
import reducerStats, { TStatsState } from '@store/reducerStats';
import reducerMessage, { TMessageState } from '@store/reducerMessage';

export type TState = {
  timer: TTimerState,
  symbols: TSymbolsState,
  stats: TStatsState,
  message: TMessageState
};

const reducer = combineReducers({
  timer: reducerTimer,
  symbols: reducerSymbols,
  stats: reducerStats,
  message: reducerMessage
});

export default reducer;

import React from 'react';
import { useSelector } from 'react-redux';

import { TState } from '@store/reducer';
import Symbol from '@components/Symbol';

type TBoardprops = {
  showResultsMode?: boolean
};

const Board: React.FC<TBoardprops> = ({ showResultsMode = false }: TBoardprops) => {

  const symbols: string[] = useSelector((state: TState) => state.symbols.items);
  const currentSymbolID: number = useSelector((state: TState) => state.symbols.currentItemID);
  const isCurrentWrong: boolean = useSelector((state: TState) => state.symbols.isCurrentWrong);
  const wrongSymbolIDs: string[] = useSelector((state: TState) => state.symbols.wrongItemsIDs);

  return (
    <div className="board">
      {symbols.map((symbol: string, index: number) => {

        const classModificators: string[] = [];
        if (showResultsMode) {
          const isWrong: boolean = wrongSymbolIDs.includes(index.toString());
          const modificator: string = isWrong ? 'wrong': 'passed';
          classModificators.push(modificator);
        } else {
          const isPassed: boolean = index < currentSymbolID;
          const isCurrent: boolean = index === currentSymbolID;
          const isWrong: boolean = isCurrent && isCurrentWrong;
          if (isPassed) classModificators.push('passed');
          if (isCurrent) classModificators.push('current');
          if (isWrong) classModificators.push('wrong');
        }

        return <Symbol key={`${index}-${symbol}`} value={symbol} modificators={classModificators.join(',')}/>
      })}
    </div>
  )
};

export default Board;


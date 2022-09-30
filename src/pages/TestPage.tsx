import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Wrapper from '@components/Wrapper';
import Stats from '@components/Stats';
import Board from '@components/Board';
import Message from '@components/Message';
import Button from '@components/Button';
import { AppRoutes, VALID_SYMBOLS_REGEXP } from '@consts/const';
import { TState } from '@store/reducer';
import ActionCreator from '@store/actions';

const TestPage: React.FC = () => {

  const isTestCompleted: boolean = useSelector((state: TState) => state.symbols.isAllSymbolsTyped);
  const hasNoData: boolean = useSelector((state: TState) => state.symbols.items.length === 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onKeyDown = React.useCallback((evt: KeyboardEvent) => {
    const typedSymbol: string = evt.key;
    if (VALID_SYMBOLS_REGEXP.test(typedSymbol)) {
      dispatch(ActionCreator.checkTypedSymbol(typedSymbol));
    }
  }, []);

  const onChangeTextButtonClick = () => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    dispatch(ActionCreator.reset({ keepText: false }));
    dispatch(ActionCreator.fetchSymbols());
  };

  const onRestartButtonClick = () => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    dispatch(ActionCreator.reset({ keepText: true }));
    dispatch(ActionCreator.timerStart());
  };

  useEffect(() => {
    if(!hasNoData) {
      dispatch(ActionCreator.timerStart());
    }
  }, [hasNoData]);

  React.useEffect(() => {
    if (hasNoData) {
      navigate(AppRoutes.HOME);
    }
    if (isTestCompleted) {
      document.removeEventListener('keydown', onKeyDown);
    } else {
      document.addEventListener('keydown', onKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    }
  }, [isTestCompleted]);

  return (
    <>
      <h1 className="visually-hidden">Тренажер слепой печати</h1>
      <Wrapper>
        <Stats />
        <Button
          text={isTestCompleted ? 'Restart': 'Another text'}
          buttonClickHandler={isTestCompleted ? onRestartButtonClick : onChangeTextButtonClick}
          isAnimate={isTestCompleted}
        />
      </Wrapper>
      <Board showResultsMode={isTestCompleted}/>
      <Message />
    </>
  )
};

export default TestPage;



import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';
import Wrapper from '@components/Wrapper';
import Loader from '@components/Loader';
import Message from '@components/Message';
import Description from '@components/Description';
import { AppRoutes } from '@consts/const';
import { TState } from '@store/reducer';
import ActionCreator from '@store/actions';

const StartPage: React.FC = () => {

  const canStart: boolean = useSelector((state: TState) => Boolean(state.symbols.items.length));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    dispatch(ActionCreator.fetchSymbols());
  }, []);

  const onStartButtonClick = () => {
    dispatch(ActionCreator.timerStart());
    navigate(AppRoutes.TEST);
  };

  return (
    <>
      <Message />
      <h1>Тренажер слепой печати</h1>
      <Wrapper>
        <p>Приготовься печатать... { canStart && <strong>Поехали!</strong> }</p>
        {
          canStart
          ?
          <Button text="Начать печатать" buttonClickHandler={onStartButtonClick} isAnimate/>
          :
          <Loader width={'200px'} />
        }
      </Wrapper>
      <Description />
    </>
  )
};

export default StartPage;



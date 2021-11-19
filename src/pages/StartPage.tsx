import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';
import Wrapper from '@components/Wrapper';
import { AppRoutes } from '@consts/const';

const StartPage: React.FC = () => {

  const navigate = useNavigate();

  const onStartButtonClick = React.useCallback(() => {
    // TODO
    // таймер
    navigate(AppRoutes.TEST);
  }, []);

  return (
    <Wrapper>
      <p>Приготовься печатать. <b>Поехали!</b></p>
      <Button text="Начать печатать" buttonClickHandler={onStartButtonClick} isShaking/>
    </Wrapper>
  )
};

export default StartPage;



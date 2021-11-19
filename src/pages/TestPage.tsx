import React from 'react';
import { useNavigate } from 'react-router-dom';

import Wrapper from '@components/Wrapper';
import Stats from '@components/Stats';
import Board from '@components/Board';
// import Hint from '@components/Hint';
import Button from '@components/Button';
import { AppRoutes } from '@consts/const';

const TestPage: React.FC = () => {

  const navigate = useNavigate();

  const onRestartButtonClick = React.useCallback(() => {
    // TODO
    // reset store
    navigate(AppRoutes.HOME);
  }, []);

  return (
    <>
      <Wrapper>
        <Stats/>
        <Button text="Заново" buttonClickHandler={onRestartButtonClick} />
      </Wrapper>
      <Board/>
      {/* <Hint label="Внимание" message="Введен неверный символ"/> */}
    </>
  )
};

export default TestPage;



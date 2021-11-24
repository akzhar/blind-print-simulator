import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import StatsItem from '@components/Stats/StatsItem';
import { TState } from '@store/reducer';
import ActionCreator from '@store/actions';

const StatsSpeed: React.FC = () => {

  const timerValue: number = useSelector((state: TState) => state.timer.value);
  const speed: number = useSelector((state: TState) => state.stats.speed);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ActionCreator.updateSpeed());
  }, [timerValue]);

  return <StatsItem title="Скорость" value={speed} units="зн./мин."/>;
};

export default StatsSpeed;

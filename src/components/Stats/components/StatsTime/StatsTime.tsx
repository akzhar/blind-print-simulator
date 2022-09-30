import React from 'react';
import { useSelector } from 'react-redux';

import StatsItem from '@components/Stats/StatsItem';
import { TState } from '@store/reducer';

const StatsTime: React.FC = () => {

  const timerValue: number = useSelector((state: TState) => state.timer.value);

  return <StatsItem title="Time" value={timerValue} units="sec"/>;
};

export default StatsTime;

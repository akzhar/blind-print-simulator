import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import StatsItem from '@components/Stats/StatsItem';
import { TState } from '@store/reducer';
import ActionCreator from '@store/actions';

const StatsAccuracy: React.FC = () => {

  const errorsCount: number = useSelector((state: TState) => state.symbols.wrongItemsIDs.length);
  const accuracy: number = useSelector((state: TState) => state.stats.accuracy);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ActionCreator.updateAccuracy());
  }, [errorsCount]);

  return <StatsItem title="Accuracy" value={accuracy.toFixed(2)} units="%"/>;
};

export default StatsAccuracy;

import React from 'react';
import { useSelector } from 'react-redux';

import StatsItem from '@components/Stats/StatsItem';
import { TState } from '@store/reducer';

const StatsErrors: React.FC = () => {

  const errorsCount: number = useSelector((state: TState) => state.symbols.wrongItemsIDs.length);

  return <StatsItem title="Errors" value={errorsCount} units="chars"/>;
};

export default StatsErrors;

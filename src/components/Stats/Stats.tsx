import React from 'react';

import StatsTime from '@components/Stats/components/StatsTime';
import StatsSpeed from '@components/Stats/components/StatsSpeed';
import StatsErrors from '@components/Stats/components/StatsErrors';
import StatsAccuracy from '@components/Stats/components/StatsAccuracy';

const Stats: React.FC = () => (
  <section className="stats">
    <StatsTime />
    <StatsSpeed />
    <StatsErrors />
    <StatsAccuracy />
  </section>
);

export default Stats;

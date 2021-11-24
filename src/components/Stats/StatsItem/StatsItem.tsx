import React from 'react';

type TStatsItemProps = {
  title: string,
  value: number | string,
  units: string
}

const StatsItem: React.FC<TStatsItemProps> = ({ title, value, units }: TStatsItemProps) => (
  <div className="stats__item">
    <h3 className="stats__item-title">{title}</h3>
    <div>
      <output className="stats__item-value">{value}</output>
      <span className="stats__item-units"> {units}</span>
    </div>
  </div>
);

export default StatsItem;

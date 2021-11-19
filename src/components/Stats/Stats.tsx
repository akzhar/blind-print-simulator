import React from 'react';

import { TState } from '@store/reducer';

const Stats: React.FC = () => (
  <section className="stats">
    <div className="stats__item">
        <h2 className="stats__item-title">Скорость</h2>
        <div>
          <output className="stats__item-value">100</output>
          <span className="stats__item-units"> зн./мин.</span>
        </div>
    </div>
    <div className="stats__item">
        <h2 className="stats__item-title">Точность</h2>
        <div>
          <output className="stats__item-value">100.0</output>
          <span className="stats__item-units"> %</span>
        </div>
    </div>
  </section>
);

export default Stats;

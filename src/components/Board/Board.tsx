import React from 'react';

import Symbol from '@components/Symbol';

const Board: React.FC = () => (
  <div className="board">
    <Symbol modificator="passed" value={'С'}/>
    <Symbol modificator="passed" value={'а'}/>
    <Symbol modificator="current" value={'ш'}/>
    <Symbol value={'а'}/>
  </div>
);

export default Board;


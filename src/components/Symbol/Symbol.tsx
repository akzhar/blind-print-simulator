import React from 'react';

type TSymbolProps = {
  value: string,
  modificators?: string
};

const Symbol: React.FC<TSymbolProps> = ({ value, modificators = '' }: TSymbolProps) => (
  <span
    className={modificators ? `symbol ${modificators.split(',').map(mod => `symbol--${mod}`).join(' ')}` : 'symbol'}
  >
    {value}
  </span>
);

export default React.memo(Symbol);

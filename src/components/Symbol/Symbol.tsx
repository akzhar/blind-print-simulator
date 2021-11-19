import React from 'react';

type TSymbolProps = {
  value: string,
  modificator?: string
};

const Symbol: React.FC<TSymbolProps> = (props: TSymbolProps) => (
  <span className={props.modificator ? `symbol symbol--${props.modificator}` : 'symbol'}>
    {props.value}
  </span>
);

export default Symbol;

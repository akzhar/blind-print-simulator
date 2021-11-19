import React from 'react';

type THintProps = {
  label: string,
  message: string
};

const Hint: React.FC<THintProps> = (props: THintProps) => (
  <div className="hint">
    <b>{`${props.label}:`}</b> {props.message}
  </div>
);

export default Hint;

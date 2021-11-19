import React from 'react';

type TWrapperProps = {
  children: React.ReactNode
};

const Wrapper: React.FC<TWrapperProps> = (props: TWrapperProps) => (
  <div className="wrapper">
    {props.children}
  </div>
);

export default Wrapper;

import React from 'react';

type TWrapperProps = {
  children: React.ReactNode
};

const Wrapper: React.FC<TWrapperProps> = ({ children }: TWrapperProps) => (
  <div className="wrapper">
    {children}
  </div>
);

export default Wrapper;

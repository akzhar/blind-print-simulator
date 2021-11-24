import React from 'react';

import loaderPath from '@assets/img/loader.svg';

type ILoaderProps = {
  width?: string
};

const Loader: React.FC<ILoaderProps> = ({ width = 'auto' }: ILoaderProps) => (
  <div className="loader" style={{width}}>
    <img src={loaderPath} alt="Loading..." width="52" height="52" />
  </div>
);

export default Loader;

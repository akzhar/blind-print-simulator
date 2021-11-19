import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => (
  <div className="layout">
    <Outlet/>
  </div>
);

export default Layout;

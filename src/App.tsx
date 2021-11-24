import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from '@components/Layout';
import StartPage from '@pages/StartPage'
import TestPage from '@pages/TestPage'
import NotFoundPage from '@pages/NotFoundPage'
import { AppRoutes } from '@consts/const';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoutes.HOME} element={<Layout />}>
        <Route index element={<StartPage/>} />
        <Route path={AppRoutes.TEST} element={<TestPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

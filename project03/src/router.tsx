import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Chart from './pages/chart';
import Price from './pages/price';
import Info from './pages/info';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path=":id" element={<Detail />}>
            <Route index element={<Info />} />
            <Route path="info" element={<Info />} />
            <Route path="chart" element={<Chart />} />
            <Route path="price" element={<Price />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Chart from './pages/detail/chart';
import Price from './pages/detail/price';
import Info from './pages/detail/info';
import Layout from './components/layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Chart from './pages/chart';
import Price from './pages/price';
import Info from './pages/info';
import Layout from './components/layout';
import { IThemeProps } from './interfaces';

const Router = ({ setIsDark, isDark }: IThemeProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setIsDark={setIsDark} />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<Detail />}>
            <Route index element={<Info />} />
            <Route path="info" element={<Info />} />
            <Route path="chart" element={<Chart isDark={isDark} />} />
            <Route path="price" element={<Price />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

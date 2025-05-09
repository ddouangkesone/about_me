import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from 'react-dom/client';
import App from './App';
import LocatorX from './projects/LocatorX/LocatorX';
import Milk from './projects/Milk';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter basename="">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects/locatorx" element={<LocatorX />} />
      <Route path="/projects/milk" element={<Milk />} />
    </Routes>
  </BrowserRouter>
);
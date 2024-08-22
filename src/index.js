import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './Components/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import Portfolio from './Pages/Portfolio';
import About from './Components/About';
import 'lenis/dist/lenis.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      <Route index element={<Landing />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/about' element={<About />} />


    </Routes>
   
  </BrowserRouter>
);


reportWebVitals();

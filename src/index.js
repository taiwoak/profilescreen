import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss';
import App from './App';
import ProfileScreen2 from './Components/ProfileScreen2/ProfileScreen2';
import ProfileEditSuccess from './Components/ProfileScreen3/ProfileEditSuccess';

const rootElement = document.getElementById("root");
render (
  <BrowserRouter>
   <App />
   <Routes>
      <Route path="/2" element={<ProfileScreen2 />} />
      <Route path="/3" element={<ProfileEditSuccess />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);


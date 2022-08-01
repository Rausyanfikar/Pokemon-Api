import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from '../pages/Detail';
import HomePage from '../pages/HomePage';

const Rot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:detail_name" element={<Detail />} />

        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Rot;

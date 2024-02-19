import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../Pages/Home'));
const Vixem = lazy(() => import('../Pages/Vixem'));
const Algoritmos = lazy(() => import('../Pages/Algoritmos'));
const PesoBruto = lazy(() => import('../Pages/PesoBruto'));

export const AppRoutes = () => {
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vixem" element={<Vixem />} />
        <Route path="/algoritmos" element={<Algoritmos />} />
        <Route path="/pesobruto" element={<PesoBruto />} />
      </Routes>
  </Suspense>
  )
}
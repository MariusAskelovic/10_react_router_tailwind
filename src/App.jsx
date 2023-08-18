import { useState } from 'react';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';

export default function App() {
  let activePage = 1;
  return (
    <div>
      <Header />
      {activePage === 1 && <HomePage />}
      {activePage === 2 && <AboutPage />}
    </div>
  );
}

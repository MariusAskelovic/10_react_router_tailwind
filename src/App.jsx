import { useState } from 'react';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';

export default function App() {
  const [activePage, setActivePage] = useState(1);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setActivePage(1);
          }}
          className="border hover:bg-slate-400 border-cyan-600 p-3 rounded-sm px-3 py-1"
        >
          Home
        </button>
        <button
          onClick={() => {
            setActivePage(2);
          }}
          className="border hover:bg-slate-400 border-cyan-600 p-3 borderrounder-sm px-3 py-1"
        >
          About
        </button>
      </div>
      {activePage === 1 && <HomePage />}
      {activePage === 2 && <AboutPage />}
    </div>
  );
}

import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import BooksPage from './pages/BooksPage';
import SingleBookPage from './pages/SingleBookPage';
import ContactsPage from './pages/ContactsPage';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:bookId" element={<SingleBookPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

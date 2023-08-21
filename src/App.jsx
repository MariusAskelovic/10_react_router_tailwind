import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Header from './components/layout/Header';
import NotFoundPage from './pages/NotFoundPage';
// import BooksPage from './pages/BooksPage';
import SingleBookPage from './pages/SingleBookPage';
import ContactsPage from './pages/ContactsPage';
import NewBookPage from './pages/NewBookPage';
import BooksPageWithSearch from './pages/BookPageWithSearch';
import AddBookPage from './pages/AddBookPage';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/books" element={<BooksPageWithSearch />} />
        <Route path="/books/:bookId" element={<SingleBookPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/books/new" element={<NewBookPage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

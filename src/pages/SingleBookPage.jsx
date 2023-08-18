import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function SingleBookPage() {
  const params = useParams();

  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    fetch('/db/books.json')
      .then((resp) => resp.json())
      .then((data) => {
        const found = data.find((bObj) => bObj.id.toString() === params.bookId);
        setCurrentBook(found || {});
      })
      .catch(console.warn);
  }, [params.bookId]);

  return (
    <div className="container">
      <Link to={'/books'} className="text-lg">
        Go back
      </Link>
      <div className="border border-slate-500 p-8 shadow-md">
        <h1 className="text-3xl font-bold underline pb-4">
          Title: {currentBook.title} ({params.bookId})
        </h1>
        <p className="text-lg text-gray-600">by: {currentBook.author}</p>
        <p className="text-2xl">Year: {currentBook.year}</p>
        <h3>
          Genre: <strong>{currentBook.genre}</strong>
        </h3>
      </div>
    </div>
  );
}

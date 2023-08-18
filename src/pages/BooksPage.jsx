import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function BooksPage() {
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    fetch('/db/books.json')
      .then((resp) => resp.json())
      .then((data) => {
        setBookData(data);
      })
      .catch(console.warn);
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline pb-4">Books page</h1>
      <p>See all the books we have</p>

      <h2 className="text-2xl font-medium mb-2">Pick a book</h2>
      <ul className="grid grid-cols-3 gap-3 place-content-center">
        {bookData.map((obj) => (
          <li
            key={obj.id}
            className="mt-1 border-4 border-blue-800 p-3 rounded-tl-xl rounded-br-xl
            bg-gradient-to-tr from-green-200 to-orange-100
            place-items-center"
          >
            <Link to={`/books/${obj.id}`}>
              <h3 className="text-xl font-bold text-cyan-700">{obj.title}</h3>
              <div className="grid grid-cols-2">
                <p>
                  Years: <br></br>
                  <strong>{obj.year}</strong>
                </p>
                <p className="text-md text-blue-600">
                  Genre: <br></br>
                  <strong>{obj.genre}</strong>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

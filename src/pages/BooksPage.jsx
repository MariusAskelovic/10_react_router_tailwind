import { Link } from 'react-router-dom';
import { bookData } from '../assets/db';

export default function BooksPage() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline pb-4">Books page</h1>
      <p>See all the books we have</p>

      <h2 className="text-2xl font-medium mb-2">Pick a book</h2>
      <ul>
        {bookData.map((obj) => (
          <li key={obj.id}>
            <Link to={`/books/${obj.id}`} className="mt-1 underline">
              {obj.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

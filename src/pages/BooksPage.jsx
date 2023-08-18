import { Link } from 'react-router-dom';

const bookData = [
  {
    id: 1,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Bildungsroman',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Southern Gothic',
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Dystopian Fiction',
  },
  // add more books here
];
export default function BooksPage() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline pb-4">Books page</h1>
      <p>See all the books we have</p>

      <h2 className="text-2xl font-medium mb-2">Pick a book</h2>
      <ul>
        {bookData.map((obj) => (
          <li key={obj.id}>
            <Link to={'book' + obj.id} className="mt-1 underline">
              {obj.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import BookLink from '../components/BookLink';

export default function BooksPage() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline pb-4">Books page</h1>
      <p>See all the books we have</p>

      <h2 className="text-2xl font-medium mb-2">Pick a book</h2>
      <BookLink />
    </div>
  );
}

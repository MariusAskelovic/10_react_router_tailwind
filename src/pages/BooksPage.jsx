import { useEffect, useState } from 'react';
import BookLink from '../components/BookLink';

export default function BooksPage() {
  const [filter, setFilter] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  // function handleFilterChange(event) {
  //   setFilter(event.target.value);
  // }
  function getFiltered(event) {
    event.preventDefault();
    setFilter(event.target.value);
    const newArr = bookData.filter((obj) =>
      obj.genre.toLowerCase().includes(filter.toLowerCase()),
    );
    setFilteredBooks(newArr);
  }

  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    fetch('/db/books.json')
      .then((resp) => resp.json())
      .then((data) => setBookData(data))
      .catch(console.warn);
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline pb-4">Books page</h1>
      <p>See all the books we have</p>

      <div className="flex justify-between">
        <h2 className="text-2xl font-medium mb-2">Pick a book</h2>
        {/* <form action="submit" className="flex gap-2"> */}
        <input
          type="text"
          name="filter"
          id="filterBooks"
          placeholder="type genre"
          className="border-2 border-blue-600 w-28 text-center m-0 text-sm"
          onChange={getFiltered}
          value={filter}
        />
        {/* <button
            className="border-4 bg-blue-400 text-white font-bold text-lg border-blue-600 px-2 text-center m-0"
            onClick={getFiltered}
          >
            Filter
          </button> */}
        {/* </form> */}
      </div>
      <BookLink
        bookData={filteredBooks.length > 0 ? filteredBooks : bookData}
      />
    </div>
  );
}

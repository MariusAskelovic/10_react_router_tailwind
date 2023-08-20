import { useEffect, useState } from 'react';

export default function NewBookPage() {
  const [addTitle, setAddTitle] = useState('');
  const [addAuthor, setAddAuthor] = useState('');
  const [addYear, setAddYear] = useState();
  const [addGenre, setAddGenre] = useState('');
  const [addCategory, setAddCategory] = useState('');

  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    fetch('/db/books.json')
      .then((resp) => resp.json())
      .then((data) => setBookData(data))
      .catch(console.warn);
  }, [bookData]);

  function inputTitle(event) {
    setAddTitle(event.target.value);
  }

  function inputAuthor(event) {
    setAddAuthor(event.target.value);
  }
  function inputYear(event) {
    setAddYear(event.target.value);
  }
  function inputGenre(event) {
    setAddGenre(event.target.value);
  }
  function inputCategory(event) {
    setAddCategory(event.target.value);
  }

  function handleBook(event) {
    event.preventDefault();
    console.log(bookData);

    const newId = Math.random().toString().slice(4, 9);
    const newBook = {
      id: newId,
      title: addTitle,
      author: addAuthor,
      year: addYear,
      genre: addGenre,
      category: addCategory,
    };
    console.log('newBook ===', newBook);
    setBookData([...bookData, newBook]);
    console.log(bookData);
  }

  return (
    <form
      action="submit"
      className="w-60 bg-slate-300 p-5 flex flex-col gap-3 ml-auto mr-auto mt-16"
    >
      <input
        className="p-2"
        type="text"
        placeholder="title"
        onChange={inputTitle}
        value={addTitle}
      />
      <input
        className="p-2"
        type="text"
        placeholder="author"
        onChange={inputAuthor}
        value={addAuthor}
      />
      <input
        className="p-2"
        type="number"
        placeholder="year"
        onChange={inputYear}
        value={addYear}
      />
      <input
        className="p-2"
        type="text"
        placeholder="genre"
        onChange={inputGenre}
        value={addGenre}
      />
      <input
        className="p-2"
        type="text"
        placeholder="category"
        onChange={inputCategory}
        value={addCategory}
      />
      {/* <select className="p-2" placeholder="category">
        <option hidden>Category</option>
        <option value="fantasy">Fantasy</option>
        <option value="fiction">Fiction</option>
        <option value="reality">Reality</option>
      </select> */}
      <button
        onClick={handleBook}
        type="submit"
        className="border-2 bg-slate-600 text-white p-2"
      >
        Add book
      </button>
    </form>
  );
}

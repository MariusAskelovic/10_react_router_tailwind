export default function AddBookPage() {
  return (
    <div>
      <form
        action="submit"
        className="w-60 bg-slate-300 p-5 flex flex-col gap-3 ml-auto mr-auto mt-16"
      >
        <input className="p-2" type="text" placeholder="title" />
        <input className="p-2" type="text" placeholder="author" />
        <input className="p-2" type="number" placeholder="year" />
        <input className="p-2" type="text" placeholder="genre" />
        {/* <input className="p-2" type="text" placeholder="category" /> */}
        <select className="p-2" placeholder="category">
          <option hidden>Category</option>
          <option value="fantasy">Fantasy</option>
          <option value="fiction">Fiction</option>
          <option value="reality">Reality</option>
        </select>
        <button type="submit" className="border-2 bg-slate-600 text-white p-2">
          Add book
        </button>
      </form>
    </div>
  );
}

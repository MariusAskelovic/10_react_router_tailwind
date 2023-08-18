import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="mb-4">
      <div className="container flex justify-between">
        <a href="" className="text-lg ">
          React<span className="font-bold">Router</span>
        </a>
        <nav>
          <NavLink
            to="/"
            activeClassName="boom"
            className="border hover:bg-slate-400 border-cyan-600  p-3 px-3 py-1"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="border hover:bg-slate-400 border-cyan-600 p-3 px-3 py-1"
          >
            About
          </NavLink>
          <NavLink
            to="/books"
            className="border hover:bg-slate-400 border-cyan-600 p-3 px-3 py-1"
          >
            Books
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

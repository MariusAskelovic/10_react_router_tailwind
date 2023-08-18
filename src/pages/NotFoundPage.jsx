import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="container">
      <h1 className="text-5xl pb-4">Oops, 404, page not found</h1>
      <p className="text-lg">THe page was not found</p>
      <Link className="underline text-2xl pt-4 block" to={'/'}>
        try home page
      </Link>
    </div>
  );
}

import { useParams } from 'react-router-dom';

export default function SingleBookPage() {
  const params = useParams();
  console.log('params ===', params);
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline pb-4">Single book page</h1>
    </div>
  );
}

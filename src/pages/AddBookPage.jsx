import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddBookPage() {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      year: '',
      genre: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('required').max(15, 'requires 15 symbols'),
      author: Yup.string().required('required').max(15, 'requires 15 symbols'),
      year: Yup.string().min(1).max(20).required('required'),
      genre: Yup.string().required('required').max(15, 'requires 15 symbols'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log('formik.errors ===', formik.errors);
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline pb-4">Add book</h1>

      <form className="grid gap-2 justify-start" onSubmit={formik.handleSubmit}>
        <div>
          <input
            onChange={formik.handleChange}
            value={formik.values.title}
            id="title"
            className="block py-1 px-2 border border-slate-500"
            type="text"
            placeholder="title"
          />
          {formik.errors.title ? (
            <p className="text-red-800">{formik.errors.title}</p>
          ) : null}
        </div>
        <div>
          <input
            onChange={formik.handleChange}
            value={formik.values.author}
            id="author"
            className="block py-1 px-2 border border-slate-500"
            type="text"
            placeholder="author"
          />
          {formik.errors.author ? (
            <p className="text-red-800">{formik.errors.author}</p>
          ) : null}
        </div>
        <div>
          <input
            className="block py-1 px-2 border border-slate-500"
            type="text"
            placeholder="year"
          />
          {formik.errors.year ? (
            <p className="text-red-800">{formik.errors.year}</p>
          ) : null}
        </div>
        <div>
          <input
            className="block py-1 px-2 border border-slate-500"
            type="text"
            placeholder="genre"
          />
          {formik.errors.genre ? (
            <p className="text-red-800">{formik.errors.genre}</p>
          ) : null}
        </div>
        {/* <div>
          <select
            className="block py-1 px-2 border border-slate-500"
            name="category"
          >
            <option value="Fantasy">Fantasy</option>
            <option value="Fiction">Fiction</option>
            <option value="Reality">Reality</option>
          </select>
        </div> */}
        <button className="border border-slate-500" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

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
      year: Yup.number()
        .min(1000, 'enter year between 1000 and 2024')
        .max(2024, 'enter year between 1000 and 2024')
        .required('required'),
      genre: Yup.string().required('required'),
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
        {/* title */}
        <div>
          <input
            onChange={formik.handleChange}
            value={formik.values.title}
            id="title"
            className="block py-1 px-2 border border-slate-500"
            type="text"
            placeholder="title"
            onBlur={formik.handleBlur}
          />
          {formik.touched.title && formik.errors.title ? (
            <p className="text-amber-400">{formik.errors.title}</p>
          ) : null}
        </div>
        {/* author */}
        <div>
          <input
            onChange={formik.handleChange}
            value={formik.values.author}
            id="author"
            className="block py-1 px-2 border border-slate-500"
            type="text"
            placeholder="author"
            onBlur={formik.handleBlur}
          />
          {formik.touched.author && formik.errors.author ? (
            <p className="text-blue-800">{formik.errors.author}</p>
          ) : null}
        </div>
        {/* year */}
        <div>
          <input
            className="block py-1 px-2 border border-slate-500"
            type="text"
            placeholder="year"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.year}
            id="year"
          />
          {formik.touched.year && formik.errors.year ? (
            <p className="text-green-800">{formik.errors.year}</p>
          ) : null}
        </div>
        {/* genre */}
        <div>
          <input
            className="block py-1 px-2 border border-slate-500"
            type="text"
            placeholder="genre"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.genre}
            id="genre"
          />
          {formik.touched.genre && formik.errors.genre ? (
            <p className="text-red-400">{formik.errors.genre}</p>
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

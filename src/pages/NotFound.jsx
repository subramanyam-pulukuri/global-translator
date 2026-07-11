import { Link } from "react-router-dom";

function NotFound() {
  return <div className="page-enter grid min-h-[65vh] place-items-center px-4 text-center"><div><div className="text-8xl">🧭</div><p className="mt-5 text-7xl font-extrabold text-blue-600">404</p><h1 className="mt-3 text-2xl font-bold">Oops, this page took a wrong turn.</h1><p className="mt-3 text-slate-600 dark:text-slate-300">The page you are looking for does not exist.</p><Link to="/" className="mt-7 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">Back home</Link></div></div>;
}

export default NotFound;

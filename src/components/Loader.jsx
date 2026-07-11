function Loader({ label = "Working..." }) {
  return (
    <div className="flex items-center justify-center gap-3 py-8 text-slate-500 dark:text-slate-400">
      <span className="h-5 w-5 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600" />
      <span>{label}</span>
    </div>
  );
}

export default Loader;

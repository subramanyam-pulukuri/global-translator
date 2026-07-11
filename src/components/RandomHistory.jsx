function RandomHistory({ history, onCopy }) {
  if (!history.length) return null;

  return (
    <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-bold">Recent strings</h2>
        <span className="text-xs text-slate-500">Last 5</span>
      </div>
      <div className="space-y-2">
        {history.map((item, index) => (
          <button key={`${item}-${index}`} onClick={() => onCopy(item)} className="flex w-full items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-left font-mono text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
            <span className="truncate">{item}</span><span className="ml-3 text-xs font-sans">Copy</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default RandomHistory;

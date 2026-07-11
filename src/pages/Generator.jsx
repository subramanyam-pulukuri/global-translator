import { useCallback, useEffect, useState } from "react";
import RandomHistory from "../components/RandomHistory";

function Generator() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [special, setSpecial] = useState(false);
  const [randomString, setRandomString] = useState("");
  const [history, setHistory] = useState([]);
  const [notice, setNotice] = useState("");

  const generateString = useCallback(() => {
    let characters = "";

    if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) characters += "0123456789";
    if (special) characters += "!@#$%^&*()-_=+[]{}?";

    if (!characters) {
      setRandomString("");
      return;
    }

    let result = "";

    for (let index = 0; index < length; index += 1) {
      result += characters[Math.floor(Math.random() * characters.length)];
    }

    setRandomString(result);

    setHistory((oldHistory) =>
      [result, ...oldHistory.filter((item) => item !== result)].slice(0, 5)
    );
  }, [length, uppercase, lowercase, numbers, special]);

  useEffect(() => {
    generateString();
  }, [generateString]);

  const copyString = useCallback(
    async (value = randomString) => {
      if (!value) return;

      try {
        await navigator.clipboard.writeText(value);
        setNotice("Copied to clipboard!");
        setTimeout(() => setNotice(""), 2000);
      } catch {
        setNotice("Could not copy. Please copy it manually.");
      }
    },
    [randomString]
  );

  const strength =
    length >= 16 && special && numbers && uppercase && lowercase
      ? "Strong"
      : length >= 10 && (numbers || special)
      ? "Medium"
      : "Basic";

  const strengthColor =
    strength === "Strong"
      ? "bg-emerald-500"
      : strength === "Medium"
      ? "bg-amber-400"
      : "bg-red-400";

  const choices = [
    ["Include uppercase (A-Z)", uppercase, setUppercase],
    ["Include lowercase (a-z)", lowercase, setLowercase],
    ["Include numbers (0-9)", numbers, setNumbers],
    ["Include special characters (!@#)", special, setSpecial],
  ];

  return (
    <div className="page-enter mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-8 text-center">
        <p className="font-semibold text-blue-600">UTILITY TOOL</p>

        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          Random String Generator
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Create a custom string for testing, passwords, or sample data.
        </p>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-7">

        <div className="rounded-xl bg-slate-900 p-5 text-white">
          <p className="text-xs font-semibold tracking-wider text-slate-400">
            LIVE PREVIEW
          </p>

          <p className="mt-3 break-all font-mono text-xl sm:text-2xl">
            {randomString || "Choose at least one character type"}
          </p>

          <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
            <span>{randomString.length} characters</span>

            <button
              onClick={() => copyString()}
              disabled={!randomString}
              className="rounded-lg bg-white/10 px-3 py-1.5 font-sans text-white transition hover:bg-white/20 disabled:opacity-50"
            >
              Copy
            </button>
          </div>
        </div>

        {notice && (
          <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
            {notice}
          </p>
        )}

        <div className="mt-7">
          <div className="flex items-center justify-between">
            <label className="font-semibold">Length</label>

            <span className="rounded-md bg-blue-50 px-3 py-1 text-sm font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              {length}
            </span>
          </div>

          <input
            type="range"
            min="5"
            max="50"
            value={length}
            onChange={(event) => setLength(Number(event.target.value))}
            className="mt-4 w-full accent-blue-600"
          />

          <div className="mt-1 flex justify-between text-xs text-slate-400">
            <span>5</span>
            <span>50</span>
          </div>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {choices.map(([label, checked, setChecked]) => (
            <label
              key={label}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 dark:border-slate-700"
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={(event) => setChecked(event.target.checked)}
                className="h-4 w-4 accent-blue-600"
              />

              <span className="text-sm font-medium">{label}</span>
            </label>
          ))}
        </div>

        <div className="mt-7 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold">
              Strength: {strength}
            </span>

            <span className="text-slate-500">
              Based on length and variety
            </span>
          </div>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div
              className={`${strengthColor} h-full rounded-full transition-all duration-500 ease-in-out ${
                strength === "Strong"
                  ? "w-full"
                  : strength === "Medium"
                  ? "w-2/3"
                  : "w-1/3"
              }`}
            />
          </div>
        </div>

        <button
          onClick={generateString}
          disabled={!uppercase && !lowercase && !numbers && !special}
          className="mt-7 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Regenerate String
        </button>
      </section>

      <RandomHistory
        history={history}
        onCopy={copyString}
      />
    </div>
  );
}

export default Generator;
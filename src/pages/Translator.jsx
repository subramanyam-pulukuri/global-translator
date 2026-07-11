import { useEffect, useState } from "react";
import LanguageSelector from "../components/LanguageSelector";
import Loader from "../components/Loader";
import { translateText } from "../services/translateAPI";

function Translator() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("en-GB");
  const [targetLanguage, setTargetLanguage] = useState("hi-IN");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  useEffect(() => {
    const shortcut = (event) => {
      if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        handleTranslate();
      }

      if (
        event.ctrlKey &&
        event.key.toLowerCase() === "c" &&
        translatedText
      ) {
        copyTranslation();
      }
    };

    window.addEventListener("keydown", shortcut);

    return () => window.removeEventListener("keydown", shortcut);
  });

  async function handleTranslate() {
    if (!text.trim()) {
      setError("Please enter some text to translate.");
      return;
    }

    if (sourceLanguage === targetLanguage) {
      setError("Please choose two different languages.");
      return;
    }

    setLoading(true);
    setError("");
    setNotice("");

    try {
      setTranslatedText(
        await translateText(text, sourceLanguage, targetLanguage)
      );
    } catch (apiError) {
      setError(
        apiError.response?.data?.message ||
          apiError.message ||
          "Translation could not be completed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  async function copyTranslation() {
    if (!translatedText) return;

    try {
      await navigator.clipboard.writeText(translatedText);
      setNotice("Translation copied to clipboard!");
    } catch {
      setError(
        "Could not copy the translation. Please copy it manually."
      );
    }
  }

  function swapLanguages() {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);

    setText(translatedText);
    setTranslatedText(text);

    setError("");
  }

  function clearAll() {
    setText("");
    setTranslatedText("");
    setError("");
    setNotice("");
  }

  return (
    <div className="page-enter mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8 text-center">
        <p className="font-semibold text-blue-600">
          LANGUAGE TOOL
        </p>

        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
          Translate with ease
        </h1>

        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Choose your languages, write your text, and get a clear result.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-7">
        <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-3">
          <LanguageSelector
            label="From"
            value={sourceLanguage}
            onChange={setSourceLanguage}
          />

          <button
          onClick={swapLanguages}
          className="mt-6 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-xl transition hover:rotate-180 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700"
          title="Swap languages"
          aria-label="Swap languages"
          >
            ⇄
          </button>

          <LanguageSelector
            label="To"
            value={targetLanguage}
            onChange={setTargetLanguage}
          />
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div>
            <textarea
              value={text}
              onChange={(event) => {
                setText(event.target.value);
                setError("");
              }}
              maxLength="5000"
              placeholder="Type or paste text here..."
              className="h-64 w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:focus:ring-blue-900"
            />

            <div className="mt-2 flex justify-between text-xs text-slate-500">
              <span>{wordCount} words</span>
              <span>{text.length}/5000 characters</span>
            </div>
          </div>

          <div className="min-h-64 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <p className="text-sm font-semibold text-slate-500">
              TRANSLATION
            </p>

            {loading ? (
              <Loader label="Translating..." />
            ) : (
              <p className="mt-4 whitespace-pre-wrap leading-7 text-slate-700 dark:text-slate-200">
                {translatedText ||
                  "Your translated text will appear here."}
              </p>
            )}
          </div>
        </div>

        {error && (
          <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950 dark:text-red-300">
            {error}
          </p>
        )}

        {notice && (
          <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
            {notice}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            disabled={!text.trim() || loading}
            onClick={handleTranslate}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Translating..." : "Translate"}
          </button>

          <button
            onClick={copyTranslation}
            disabled={!translatedText}
            className="rounded-xl border border-slate-200 px-5 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700"
          >
            Copy translation
          </button>

          <button
            onClick={clearAll}
            className="rounded-xl px-5 py-3 font-semibold text-slate-500 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Clear
          </button>

          <span className="self-center text-xs text-slate-400">
            Tip: Ctrl + Enter translates
          </span>
        </div>
      </div>
    </div>
  );
}

export default Translator;
import { Link } from "react-router-dom";

const features = [
  {
    icon: "🌍",
    title: "Translate globally",
    text: "Translate between popular languages with a clean, focused workspace.",
    link: "/translator",
    button: "Try translator"
  },
  {
    icon: "🔐",
    title: "Make random strings",
    text: "Create passwords, test data, and IDs with options that are easy to understand.",
    link: "/generator",
    button: "Open generator"
  },
  {
    icon: "⚡",
    title: "Made to be quick",
    text: "Copy results with one click and keep your most recent generated strings nearby.",
    link: "/about",
    button: "Learn more"
  }
];

function Home() {
  return (
    <div className="page-enter">
      <section className="overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-4 py-20 text-white sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-medium">
              Simple tools for everyday work
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Translate ideas.
              <br />
              Generate with confidence.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-blue-50">
              Global Translator brings text translation and random string generation together in one friendly, student-built project.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/translator"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Start translating
              </Link>

              <Link
                to="/generator"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Generate a string
              </Link>
            </div>
          </div>

          <div className="relative mx-auto grid h-64 w-64 place-items-center rounded-full border border-white/30 bg-white/10 shadow-2xl backdrop-blur-sm sm:h-72 sm:w-72">
            <span className="animate-bounce cursor-default select-none text-8xl">
              🌐
            </span>

            <span className="absolute -right-5 top-5 rounded-xl bg-white px-3 py-2 text-sm font-bold text-blue-700 shadow-lg cursor-default select-none">
              Hello!
            </span>

            <span className="absolute -bottom-2 -left-8 rounded-xl bg-white px-3 py-2 text-sm font-bold text-blue-700 shadow-lg cursor-default select-none">
              नमस्ते
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 text-center">
          <p className="font-semibold text-blue-600">
            WHAT YOU CAN DO
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Two useful tools, one neat place
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
            >
              <span className="select-none cursor-default text-4xl">{feature.icon}</span>

              <h3 className="mt-4 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-2 flex-grow leading-7 text-slate-600 dark:text-slate-300">
                {feature.text}
              </p>

              <Link
                to={feature.link}
                className="mt-5 inline-block font-semibold text-blue-600 hover:text-blue-800"
              >
                {feature.button} →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
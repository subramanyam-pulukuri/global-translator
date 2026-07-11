import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-6 text-center">

        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-slate-800 dark:text-white">
            Global Translator
          </span>{" "}
          |{" "}
          Developed by Subramanyam Pulukuri
        </p>

        <div className="mt-4 flex items-center justify-center gap-8">

          <a
            href="https://github.com/subramanyam-pulukuri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 transition-all duration-300 hover:scale-105 hover:text-blue-600"
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/subramanyam-pulukuri"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 transition-all duration-300 hover:scale-105 hover:text-blue-600"
          >
            <FaLinkedin size={20} />
            <span>LinkedIn</span>
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
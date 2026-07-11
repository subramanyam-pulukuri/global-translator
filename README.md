# Global Translator

Global Translator is a modern, responsive React application that combines **text translation** and **secure random string generation** into a single platform. Built using **React**, **Tailwind CSS**, **React Router DOM**, **Axios**, and **RapidAPI**, the project demonstrates modern front-end development concepts including reusable components, API integration, responsive design, client-side routing, and state management.

---

## Live Demo

**GitHub Pages:**  
https://subramanyam-pulukuri.github.io/global-translator/

**Vercel:**  
https://global-translator-web.vercel.app/


---

## Features

### 🌍 Translator

- Translate text between multiple supported languages
- Choose source and target languages
- Swap languages instantly
- Copy translated text to the clipboard
- Word count and character count
- Loading indicator during translation
- Error handling and input validation
- Clear input and output with one click
- Keyboard shortcut (`Ctrl + Enter`) for quick translation
- Responsive language selector layout

### 🔐 Random String Generator

- Generate secure random strings
- Adjustable string length
- Uppercase letters
- Lowercase letters
- Numbers
- Special characters
- Password strength indicator
- Live generated output
- Copy generated string
- History of recently generated strings

### 🎨 User Interface

- Responsive design for desktop, tablet, and mobile
- Light and Dark mode
- Smooth page transitions
- Modern UI with Tailwind CSS
- Mobile-friendly navigation
- Custom 404 page
- React Router based navigation

---

## Technologies Used

- React (Create React App)
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM
- Axios
- React Icons
- RapidAPI
- HTML5
- CSS3

---

## Project Structure

```text
global-translator/
│
├── public/
│   ├── 404.html
│   ├── icons8-language-claude-hand-drawn-96.png
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── LanguageSelector.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   └── RandomHistory.jsx
│   │
│   ├── data/
│   │   └── languages.js
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Generator.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   └── Translator.jsx
│   │
│   ├── services/
│   │   └── translateAPI.js
│   │
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/subramanyam-pulukuri/global-translator.git
```

### 2. Navigate to the project directory

```bash
cd global-translator
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a `.env` file in the project root and add your RapidAPI credentials.

```env
REACT_APP_RAPID_API_KEY=your_rapidapi_key
REACT_APP_RAPID_API_HOST=ultra-fast-translation.p.rapidapi.com
```

### 5. Start the development server

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

---

## Environment Variables

The translation feature requires a RapidAPI subscription.

Create a `.env` file with the following variables:

```env
REACT_APP_RAPID_API_KEY=your_rapidapi_key
REACT_APP_RAPID_API_HOST=ultra-fast-translation.p.rapidapi.com
```

**Important**

- Never commit your `.env` file.
- Only commit `.env.example`.
- Keep your API keys private.

---

## RapidAPI Setup

1. Create a RapidAPI account.
2. Subscribe to the Ultra Fast Translation API.
3. Copy your API Key.
4. Add the credentials to the `.env` file.
5. Restart the development server.

---

## Available Scripts

### Start Development Server

```bash
npm start
```

### Create Production Build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command automatically:

- Builds the production version
- Sets the correct GitHub Pages public path
- Publishes the build to the `gh-pages` branch

---

## Deployment

This project supports deployment on both **GitHub Pages** and **Vercel** using the same codebase.

### GitHub Pages

Deploy using:

```bash
npm run deploy
```

### Vercel

Import the GitHub repository into Vercel.

The included `vercel.json` configuration automatically handles client-side routing for React Router, so no additional configuration is required.

### Environment Variables

Configure the following variables in your hosting platform:

```env
REACT_APP_RAPID_API_KEY
REACT_APP_RAPID_API_HOST
```

---

## Future Improvements

- Automatic language detection
- Voice input support
- Text-to-Speech
- Translation history
- Favorite translations
- Multiple translation providers
- Offline translation support

---

## Learning Objectives

This project demonstrates practical implementation of:

- React Components
- React Hooks
- useState
- useEffect
- Client-side Routing
- REST API Integration
- Axios
- Tailwind CSS
- Responsive Web Design
- Reusable Components
- State Management
- Error Handling
- Form Validation
- Clipboard API
- Environment Variables
- GitHub Pages Deployment
- Vercel Deployment

---

## Author

**Subramanyam Pulukuri**

**GitHub**  
https://github.com/subramanyam-pulukuri

**LinkedIn**  
https://www.linkedin.com/in/subramanyam-pulukuri

---

## License

This project is developed for educational and learning purposes as part of a Front-End Development Internship.
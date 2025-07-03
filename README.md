[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19801659&assignment_repo_type=AssignmentRepo)
# PLP Task Manager

A responsive React application for managing tasks, demonstrating component architecture, state management, hooks, API integration, and Tailwind CSS styling.

## 🚀 Project Overview
This project is a task manager built with React, Vite, and Tailwind CSS. It features:
- Reusable components (Button, Card, Navbar, Footer, Layout)
- Task management (add, complete, delete, filter tasks)
- Persistent tasks using localStorage
- Theme switcher (light/dark mode)
- API integration (fetch and search posts from JSONPlaceholder)
- Responsive design and modern UI

## ✨ Features
- **Task Manager:** Add, complete, delete, and filter tasks (All, Active, Completed)
- **API Data Page:** Fetch and search posts from a public API
- **Theme Switcher:** Toggle between light and dark mode
- **Reusable Components:** Button, Card, Navbar, Footer, Layout
- **Responsive Design:** Works on mobile, tablet, and desktop
- **Tailwind CSS:** Utility-first styling

## 🛠️ Getting Started

### Prerequisites
- Node.js v18 or higher
- npm (comes with Node.js)

### Installation
1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd week-3-react-js-assignment-odingaval
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173/](http://localhost:5173/)

## 📂 Folder Structure
```
week-3-react-js-assignment-odingaval/
  ├── index.html
  ├── package.json
  ├── README.md
  ├── Week3-Assignment.md
  ├── src/
  │   ├── App.jsx
  │   ├── main.jsx
  │   ├── index.css
  │   └── components/
  │        ├── Button.jsx
  │        ├── Card.jsx
  │        ├── Footer.jsx
  │        ├── Layout.jsx
  │        ├── Navbar.jsx
  │        ├── TaskManager.jsx
  │        └── ThemeContext.jsx
```

## 📜 Available Scripts
- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build

## 🌐 Deployment
You can deploy this app to Vercel, Netlify, or GitHub Pages. For example, to deploy to Vercel:
1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com/) and import your repo.
3. Follow the prompts to deploy.
4. Add your deployed URL to this README.

## 📝 Screenshots
_Add screenshots of your app here_

## 📢 Credits
- Built with [React](https://react.dev/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/)
- API: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── hooks/           # Custom React hooks
├── context/         # React context providers
├── api/             # API integration functions
├── utils/           # Utility functions
└── App.jsx          # Main application component
```

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all required components and features
2. Implement proper state management with hooks
3. Integrate with at least one external API
4. Style your application with Tailwind CSS
5. Deploy your application and add the URL to your README.md

## Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/) 
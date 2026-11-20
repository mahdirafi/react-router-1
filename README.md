<div align="center">

# 🧭 React Router 1

**A React single-page application that demonstrates client-side routing with React Router, built with Vite.**



[Report a Bug](../../issues) · [Request a Feature](../../issues)

</div>

---

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Routing Overview](#-routing-overview)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [What I Learned](#-what-i-learned)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 📖 About the Project

**React Router 1** is a hands-on project for learning and practicing client-side routing in React. It shows how to split a single-page application into multiple views, navigate between them without a full page reload, and organize routes in a clean, scalable way.

The project is bootstrapped with **Vite** for fast development and uses **ESLint** to keep the code consistent.

---

## ✨ Features

- 🧭 **Client-side routing**: move between pages without reloading the browser.
- 🧱 **Shared layout**: a common navbar and footer rendered around every page.
- 🔗 **Active navigation links**: the current page is highlighted in the menu.
- 🧩 **Nested routes**: child routes rendered inside a parent layout.
- 🔀 **Dynamic routes**: pages driven by URL parameters.
- 🚧 **404 page**: a friendly fallback for unknown URLs.
- ⚡ **Fast development**: hot module replacement powered by Vite.

> Remove any feature in this list that your project does not include.

---

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Library | [React](https://react.dev/) |
| Routing | [React Router](https://reactrouter.com/) |
| Build Tool | [Vite](https://vite.dev/) |
| Language | JavaScript (ES6+) |
| Linting | [ESLint](https://eslint.org/) |

---

## 📁 Project Structure

```bash
react-router-1/
├── public/                 # Static assets
├── src/                    # Application source code (pages, components, routes, entry files)
├── .gitignore
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML entry point
├── package.json
├── package-lock.json
├── vite.config.js          # Vite configuration
└── README.md
```

> Replace the `src/` line with your real folders, for example `components/`, `pages/`, `layouts/`, `routes/`, `App.jsx`, and `main.jsx`.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18 or later**
- npm (included with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mahdirafi/react-router-1.git
   ```

2. **Move into the project folder**

   ```bash
   cd react-router-1
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. Open **http://localhost:5173** in your browser.

---

## 🗺️ Routing Overview

A typical route setup for this project looks like this:

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,          // Shared layout with <Outlet />
    errorElement: <NotFound />, // 404 / error page
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "users/:id", element: <UserDetails /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/users/:id` | Dynamic details page |
| `*` | 404 Not Found |

> This table and snippet are examples. Update them to match the routes you actually defined.

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with hot module replacement |
| `npm run build` | Builds the app for production into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint across the project |

---

## ☁️ Deployment

The app can be deployed to any static hosting service, such as Netlify, Vercel, or Firebase Hosting.

- **Build command:** `npm run build`
- **Output directory:** `dist`

For single-page apps, make sure unknown paths fall back to `index.html` so routes keep working after a refresh. On Netlify, add a `public/_redirects` file with this line:

```
/*    /index.html   200
```

---

## 🧠 What I Learned

- Setting up `BrowserRouter` or `createBrowserRouter` in a Vite project
- Building shared layouts with `<Outlet />`
- Navigating with `<Link>` and `<NavLink>`
- Reading URL parameters with `useParams`
- Handling unknown routes with a 404 page

---

## 🔮 Roadmap

- [ ] Data loading with route `loader` functions
- [ ] Protected (private) routes
- [ ] Loading and error states per route
- [ ] Responsive navbar with a mobile menu
- [ ] Live demo deployment

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 👨‍💻 Author

**MD Mahdi**
Web Developer

- GitHub: [@mahdirafi](https://github.com/mahdirafi)

---

<div align="center">

⭐ If you find this project useful, please consider giving it a star!

</div>
# LUGX Gaming Store (React & Tailwind CSS)

A modern, responsive gaming e-commerce landing page refactored into a modular React architecture using Vite and Tailwind CSS v4.

**Live Demo:** [https://Engy2003.github.io/lugx-gaming-react/](https://Engy2003.github.io/lugx-gaming-react/)

## Features

- **Modular Component Architecture:** Cleanly separated into reusable React components (`Navbar`, `Hero`, `TrendingGames`, `MostPlayed`, `TopCategories`, `CtaSection`, `Footer`).
- **Responsive Design:** Fully adaptive layouts across mobile, tablet, and desktop screens using CSS Grid and Flexbox utilities.
- **Interactive Mobile Navigation:** State-driven slide-out drawer menu with animated hamburger toggle.
- **Data-Driven UI:** Game cards, feature highlights, and categories rendered dynamically from structured arrays.
- **Smooth Hover Effects:** Interactive card states, price badges, and button transitions.

## Tech Stack

- **React 19** (Functional Components & Hooks)
- **Vite** (Build Tool & Dev Server)
- **Tailwind CSS v4** (Utility-First Styling & Custom Theme Variables)
- **HTML5 & JavaScript (ES6+)**

## Project Structure

```text
lugx-gaming-react/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TrendingGames.jsx
│   │   ├── MostPlayed.jsx
│   │   ├── TopCategories.jsx
│   │   ├── CtaSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
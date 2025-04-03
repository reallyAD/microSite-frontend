# ReallyAD Frontend

Frontend repository for the **Really Addictive Drinks** micro-site.


## 🧱 Tech Stack

- **React.js** – JavaScript library for building user interfaces  
- **Vite** – Lightning-fast development build tool  
- **Tailwind CSS** – Utility-first CSS framework for styling


## 📦 Project Overview

This frontend powers the user-facing micro-site for **Really Addictive Drinks**. Built with React and styled using Tailwind CSS, it delivers a fast, responsive, and modern UI that integrates seamlessly with the backend services.


## 🚀 Local Development

### 1. Clone the repository
```
git clone https://github.com/reallyAD/microSite-frontend.git
cd microSite-frontend
```

### 2. Install dependencies
```
npm install
```

### 3. Run locally
```
npm run dev
```


## Development

### File Structure
```
microSite/
├── public/                         # Static assets (e.g. favicon, logos)
├── src/
│   ├── assets/                     # Images, logos, and static files
│   ├── components/                 # Reusable UI components across all pages (e.g. Button, Navbar)
│   ├── pages/                      # Page-level components for routing
│   │   └── home/                   # Home page directory
│   │       ├── components/         # Components specific to the Home page
│   │       └── Home.jsx            # Home page component
│   ├── utils/                      # Utility functions and API helpers (e.g. Axios)
│   ├── App.jsx                     # Main app component with routes
│   ├── main.jsx                    # Entry point for React + Vite
│   ├── App.css
│   └── index.css                   # Tailwind base styles
├── .gitignore                      # Git ignore rules
├── index.html                      # Main HTML template for Vite
├── package.json                    # Project metadata and dependencies
├── package-lock.json
└── vite.config.js                  # Vite build config
```

# React + Vite Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Showcases projects, skills, and contact information with interactive components and a dark/light theme toggle.

## Features

- Responsive design for mobile and desktop
- Projects showcase with interactive cards
- Skills section with category filters
- Contact form and social links
- Dark/Light theme toggle
- Smooth animations using Framer Motion

## Technologies Used

- React.js (with Vite)
- Tailwind CSS
- Framer Motion
- Lucide React (Icons)

## Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/react-portfolio.git
   cd react-portfolio
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Tailwind CSS**

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

   Configure `tailwind.config.cjs`:

   ```js
  
   import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
   ```

   Add Tailwind directives to `src/index.css`:

   ```css
    @import "tailwindcss";
   ```

4. **Install Framer Motion**

   ```bash
   npm install framer-motion
   ```

5. **Install Lucide React icons**

   ```bash
   npm install lucide-react
   ```

6. **Start the development server**

   ```bash
   npm run dev
   ```

## Folder Structure

```
react-portfolio/
├─ public/
├─ src/
│  ├─ components/      # Navbar, Hero, About, Skills, Projects, Contact
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
├─ tailwind.config.cjs
├─ vite.config.js
├─ package.json
```

## Deployment

Deploy easily on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/).





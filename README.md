# Jashanveer Singh - Portfolio Website

[![Deployment Status](https://img.shields.io/badge/deployment-live-brightgreen)](https://www.jvsingh.com)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.5-646CFF)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black)](https://vercel.com/)

> 🚀 **Live Site**: [jvsingh.com](https://jvsingh.com)

A modern, responsive portfolio website showcasing my projects, skills, and professional experience. Built with React and featuring a clean, minimalist design with dark/light theme support.

## ✨ Features

- **🎨 Dual Theme Support** - Seamless dark/light mode toggle
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Fast Performance** - Built with Vite for lightning-fast loading
- **🎯 Interactive UI** - Smooth animations and hover effects
- **📄 Resume Integration** - Built-in PDF modal for resume viewing
- **🔗 Project Showcase** - Interactive project cards with live demos and GitHub links
- **🛠️ Skills Display** - Organized skill categories with visual hierarchy
- **🎪 Modern Design** - Clean, professional aesthetic

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Component-based UI library
- **CSS Modules** - Scoped styling with theme support
- **Vite** - Fast build tool and development server

### Deployment & Hosting
- **Vercel** - Modern deployment platform
- **Custom Domain** - Professional domain setup

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Tailwind CSS** - Utility-first CSS framework

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/jvsingh.github.io.git
   cd jvsingh.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🎨 Theme System

The website features a custom theme system with CSS variables:

- **Light Mode**: Clean, professional white background with blue accents
- **Dark Mode**: Modern dark theme with consistent color scheme
- **Smooth Transitions**: All theme changes are animated for better UX

## 📱 Responsive Design

Optimized breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Adding New Projects
1. Navigate to `src/components/Projects/Projects.jsx`
2. Add your project data to the `projects` array
3. Include: title, description, technologies, liveUrl, githubUrl, and image

### Updating Skills
1. Open `src/components/Skills/Skills.jsx`
2. Modify the `skillsData` object with your technologies
3. Skills are automatically organized into categories

### Changing Theme Colors
1. Edit CSS variables in `src/styles/globals.css`
2. Update both `:root` and `[data-theme="dark"]` selectors

## 🚀 Deployment

This site is deployed on Vercel with automatic deployments from the main branch.

### Deploy Your Own
1. Fork this repository
2. Connect to Vercel
3. Set up your custom domain (optional)
4. Configure environment variables if needed

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Website**: [jvsingh.com](https://www.jvsingh.com)
- **LinkedIn**: [Jashanveer Singh](https://www.linkedin.com/in/jashanveer/)

---

<p align="center">
  Made with ❤️ by Jashanveer Singh
</p>

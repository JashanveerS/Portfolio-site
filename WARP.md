# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a React-based personal portfolio website for Jashanveer Singh, showcasing projects, skills, and professional information. The site features a modern design with dark/light theme support and is deployed on Vercel.

**Live Site**: [jvsingh.com](https://jvsingh.com)

## Architecture & Structure

### Core Architecture
- **Frontend Framework**: React 18.3.1 with functional components and hooks
- **Build Tool**: Vite 7.0.5 for fast development and optimized production builds
- **Styling**: CSS Modules for component-scoped styling + Tailwind CSS for utilities
- **Theme System**: Custom React Context-based theme provider with CSS variables
- **Deployment**: Vercel with automatic deployments from main branch

### Key Components Structure
```
src/
├── App.jsx                    # Main app component with section layout
├── main.jsx                   # React root with ThemeProvider wrapper
├── common/                    # Reusable components
│   ├── ThemeContext.jsx      # Global theme state management
│   ├── PDFModal.jsx          # Resume viewer modal component
│   └── ProjectCard.jsx       # Reusable project display card
├── sections/                  # Page sections as components
│   ├── Hero/                 # Main landing section with intro
│   ├── Projects/             # Project showcase with cards
│   ├── Skills/               # Skills display section
│   ├── Contact/              # Contact form (Formspree integration)
│   └── Footer/               # Site footer
└── assets/                   # Static images, icons, resume PDF
```

### Theme System Implementation
- Uses CSS custom properties (`--color-primary`, etc.) for theme variables
- React Context provides `{theme, toggleTheme}` to all components
- Icons and images dynamically switch based on theme state
- Smooth transitions between light/dark modes

### External Integrations
- **Formspree** (`https://formspree.io/f/mjkvrdgl`) for contact form submissions
- **Google Fonts** (Roboto Mono, Rubik) for typography
- **GitHub/LinkedIn** social links in Hero section

## Development Commands

### Essential Commands
```bash
# Start development server (localhost:5173)
npm run dev
# or
npm start

# Build for production
npm run build

# Lint codebase
npm run lint

# Deploy to GitHub Pages (if using gh-pages)
npm run deploy
```

### Development Workflow
```bash
# Install dependencies
npm install

# Run development server with hot reload
npm run dev

# Build and preview production build locally
npm run build && npx vite preview
```

### Testing & Quality
```bash
# Lint all JavaScript/JSX files
npm run lint

# Fix auto-fixable linting issues
npx eslint . --fix
```

## Configuration Files

### Vite Configuration (`vite.config.js`)
- Standard React setup with Vite plugins
- Base path set to '/' for root deployment

### ESLint Configuration (`eslint.config.js`)
- Modern ESLint config using flat config format
- React, React Hooks, and React Refresh plugins enabled
- `react/jsx-no-target-blank` disabled for external links

### Tailwind Configuration (`tailwind.config.js`)
- Utility-first CSS framework integrated with Vite
- Custom color schemes and responsive breakpoints

## Security Analysis & Google Warning Resolution

### Security Scan Results
After comprehensive analysis, **no malicious code or security vulnerabilities were found**. The codebase is clean and follows React best practices. The Google "dangerous site" warning is likely a **false positive** caused by:

1. **New domain or hosting changes** - Search engines may flag recently updated sites
2. **External link patterns** - Multiple GitHub/LinkedIn links might trigger automated security scans
3. **Contact form integration** - Formspree integration could be flagged by overly cautious security tools
4. **PDF iframe usage** - ⚠️ **RESOLVED**: Replaced PDF iframe viewer with direct download link

### Recommended Actions for Google Warning
1. **Submit to Google Search Console** for manual review
2. **Request recrawling** of the site through Google Search Console
3. **Verify domain ownership** in Google Search Console
4. **Check Vercel deployment logs** for any unusual activity
5. **Monitor for any unauthorized commits** in the Git history

### Security Fix Applied
- **PDF iframe removed** - Replaced with secure direct download link to eliminate potential security scanner flags
- **DOM manipulation reduced** - Removed dynamic element creation in PDF modal

### Security Best Practices Implemented
- No sensitive data (API keys, tokens) exposed in codebase
- External links use `target="_blank"` with proper `rel` attributes
- Form submissions handled through legitimate third-party service (Formspree)
- All external resources loaded over HTTPS
- No dangerous JavaScript patterns (eval, innerHTML, etc.)
- Resume download via secure direct link (no iframe embedding)

## Content Management

### Adding New Projects
Edit `src/sections/Projects/Projects.jsx`:
```javascript
const projectsData = [
  {
    id: number,
    title: "Project Name",
    subtitle: "Short description",
    description: "Detailed description",
    image: importedImage,
    alt: "Alt text",
    technologies: ["React", "Node.js", ...],
    githubLink: "https://github.com/...",
    liveLink: "https://..." or null
  }
]
```

### Updating Skills
Modify skill categories in `src/sections/Skills/Skills.jsx` within the skills data structure.

### Theme Customization
Edit CSS variables in component CSS modules or main stylesheets:
- Light theme: `:root` selector
- Dark theme: `[data-theme="dark"]` selector

## Deployment

### Vercel (Current)
- Automatic deployments from `main` branch
- Custom domain configured: jvsingh.com
- Environment variables: None required for current setup

### Alternative Deployment (GitHub Pages)
```bash
npm run predeploy  # Builds the project
npm run deploy     # Deploys to gh-pages branch
```

## Troubleshooting

### Common Issues
- **Vite dev server not starting**: Check Node.js version (requires v16+)
- **Build failures**: Run `npm install` to ensure all dependencies are installed
- **Theme not switching**: Verify ThemeContext is wrapping the App component
- **Images not loading**: Check file paths in assets directory

### Performance Optimization
- Images are optimized for web delivery
- Vite automatically handles code splitting and optimization
- CSS Modules prevent style conflicts and reduce bundle size
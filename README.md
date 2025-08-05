# INSPECTX - AI-Powered Inspection Solutions

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-blue.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.6.3-purple.svg)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A comprehensive React-based web application showcasing AI-powered industrial inspection solutions with cutting-edge drone technology and automated inspection capabilities.

## 🚀 Quick Start

### Prerequisites

- **Node.js** 14.x or higher
- **npm** 6.x or higher
- **Git** for version control

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bala1415/inspectx.io.git
   cd inspectx.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Overview

INSPECTX is a modern single-page application built with React that demonstrates:

- **AI-Powered Inspections** across multiple industries
- **Drone Technology Solutions** for automated monitoring
- **Team Showcase** with comprehensive member profiles
- **Interactive Demos** and service presentations
- **Responsive Design** optimized for all devices

### Key Features

- 🎯 **Multi-Service Platform**: Railway, Power Line, Solar Panel, and Water Line inspections
- 👥 **Team Management**: Dynamic team member profiles with photos and achievements
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✨ **Smooth Animations**: Framer Motion for enhanced user experience
- 🎬 **Media Rich**: Video backgrounds, image galleries, and interactive slideshows
- 📋 **Form Integration**: Demo request and contact forms

## 🏗️ Technology Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Frontend** | React | 19.1.0 | UI Framework |
| **Routing** | React Router DOM | 7.5.0 | Client-side routing |
| **Styling** | Tailwind CSS | 3.4.17 | Utility-first CSS |
| **Animation** | Framer Motion | 12.6.3 | Motion graphics |
| **Icons** | React Icons | 5.5.0 | Icon library |
| **Build Tool** | React Scripts | 5.0.1 | Development tools |
| **Testing** | React Testing Library | Latest | Component testing |

## 📖 Documentation

This project includes comprehensive documentation for all aspects of development and deployment:

- 📋 **[Main Documentation](./DOCUMENTATION.md)** - Complete project overview
- 🔧 **[Development Guide](./DEVELOPMENT_GUIDE.md)** - Setup and development workflow  
- 🧩 **[Component Documentation](./COMPONENT_DOCUMENTATION.md)** - Detailed component specifications
- 🚀 **[Deployment Guide](./DEPLOYMENT_GUIDE.md)** - Production deployment instructions
- 🔌 **[API Documentation](./API_DOCUMENTATION.md)** - API structure and integration
- 📊 **[Technical Analysis](./PROJECT_ANALYSIS.md)** - Architecture and performance analysis
- 📚 **[Documentation Index](./DOCUMENTATION_INDEX.md)** - Complete documentation overview

## 🛠️ Available Scripts

### Development

```bash
npm start          # Start development server (localhost:3000)
npm test           # Run test suite in watch mode
npm run build      # Create optimized production build
npm run eject      # Eject from Create React App (irreversible)
```

### Code Quality

```bash
npm run lint       # Run ESLint for code quality
npm run format     # Format code with Prettier
npm run analyze    # Analyze bundle size
```

## 🏗️ Project Structure

```
inspectx.io/
├── 📁 public/              # Static assets and HTML template
├── 📁 src/                 # Source code
│   ├── 📁 assets/          # Images, videos, documents
│   │   ├── founder/        # Leadership team photos
│   │   ├── techteam/       # Technical team photos
│   │   ├── partners/       # Partner company logos
│   │   └── slides/         # Service demonstration slides
│   ├── 📁 components/      # Reusable UI components
│   ├── 📁 pages/           # Route-specific page components
│   │   └── teams/          # Team-specific pages
│   ├── App.js              # Main application component
│   └── index.js            # Application entry point
├── 📄 package.json         # Dependencies and scripts
├── 📄 tailwind.config.js   # Tailwind CSS configuration
└── 📚 Documentation files  # Comprehensive project docs
```

## 👥 Team Structure

The application showcases different team categories:

- **👔 Leadership Team** - Executive leadership and founders
- **💻 Technical Experts** - AI engineers and developers  
- **✈️ Pilots** - Certified drone operators
- **🛠️ Support Staff** - Customer support and operations

Each team section includes detailed member profiles with:
- Professional photos and bios
- Specializations and expertise areas
- Key achievements and certifications
- Contact information and social links

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (`blue-400` to `blue-600`)
- **Secondary**: Green accent (`green-400` to `green-500`)
- **Background**: Dark theme (`gray-900`, `gray-800`, `black`)
- **Text**: Light colors (`white`, `gray-300`, `gray-200`)

### Animation Patterns
- **Fade In**: `opacity: 0 → 1` with `y: 50 → 0`
- **Stagger**: Delayed animations with `index * 0.1s`
- **Hover Effects**: Scale and color transitions
- **Scroll Triggers**: `whileInView` animations

## 🚀 Deployment

The application can be deployed to various platforms:

### Recommended Platforms
- **Vercel** - Automatic deployments from Git
- **Netlify** - Static site hosting with forms
- **AWS S3 + CloudFront** - Scalable hosting with CDN
- **GitHub Pages** - Free hosting for public repos

### Quick Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel --prod

# Deploy to Netlify
npx netlify deploy --prod --dir=build
```

## 🧪 Testing

### Running Tests

```bash
npm test                    # Interactive test runner
npm test -- --coverage     # Run with coverage report
npm test -- --watchAll     # Run all tests in watch mode
```

### Test Structure

```
src/
├── components/
│   ├── Component.jsx
│   └── __tests__/
│       └── Component.test.jsx
└── pages/
    ├── Page.jsx
    └── __tests__/
        └── Page.test.jsx
```

## 🔧 Development Guidelines

### Code Style
- Use **functional components** with hooks
- Follow **PascalCase** for components
- Use **camelCase** for functions and variables
- Implement **responsive design** with Tailwind classes

### Git Workflow
```bash
git checkout -b feature/new-feature
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

### Component Pattern
```jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NewComponent = ({ prop1, prop2 }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Side effects
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="responsive-styles"
    >
      {/* Component content */}
    </motion.div>
  );
};

export default NewComponent;
```

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** thoroughly
5. **Submit** a pull request

### Development Setup
See [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md) for detailed setup instructions.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Documentation**: Check our comprehensive docs
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub discussions for questions
- **Email**: Contact the development team

## 🗺️ Roadmap

### Current Version (v1.0)
- ✅ Complete UI implementation
- ✅ Responsive design
- ✅ Team management system
- ✅ Service showcases

### Upcoming Features
- 🔄 TypeScript migration
- 🔄 API integration
- 🔄 Content management system
- 🔄 Performance optimizations
- 🔄 PWA capabilities

## 📊 Performance

- **Bundle Size**: ~2.5MB (optimized build)
- **Lighthouse Score**: 65-75 (target: 90+)
- **Load Time**: <3s (target: <2s)
- **Mobile Support**: Fully responsive

## 🙏 Acknowledgments

- **Create React App** for the initial setup
- **Tailwind CSS** for the utility-first styling approach
- **Framer Motion** for smooth animations
- **React Icons** for comprehensive icon library
- **Vercel** for seamless deployment

---

**Built with ❤️ by the INSPECTX Team**

*For detailed documentation and guides, please refer to the documentation files in this repository.*

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

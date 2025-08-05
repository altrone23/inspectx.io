# Development Setup Guide

## Prerequisites

### System Requirements

- **Operating System:** Windows 10/11, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **Node.js:** Version 14.x or higher (LTS recommended)
- **npm:** Version 6.x or higher (comes with Node.js)
- **Git:** Latest version for version control

### Recommended Tools

- **Code Editor:** Visual Studio Code (with recommended extensions)
- **Browser:** Chrome/Firefox with React Developer Tools
- **Terminal:** PowerShell (Windows), Terminal (macOS), or Bash (Linux)

## Initial Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Bala1415/inspectx.io.git
cd inspectx.io
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React and React DOM
- React Router for navigation
- Framer Motion for animations
- Tailwind CSS for styling
- Testing libraries

### 3. Verify Installation

```bash
npm run start
```

The application should open at `http://localhost:3000`

## Development Environment Setup

### VS Code Extensions

Install these recommended extensions:

1. **ES7+ React/Redux/React-Native snippets**
   - ID: `dsznajder.es7-react-js-snippets`
   - Provides React code snippets

2. **Tailwind CSS IntelliSense**
   - ID: `bradlc.vscode-tailwindcss`
   - Auto-completion for Tailwind classes

3. **Auto Rename Tag**
   - ID: `formulahendry.auto-rename-tag`
   - Automatically renames paired HTML/JSX tags

4. **Bracket Pair Colorizer**
   - ID: `CoenraadS.bracket-pair-colorizer`
   - Colors matching brackets

5. **GitLens**
   - ID: `eamodio.gitlens`
   - Enhanced Git capabilities

6. **Prettier - Code formatter**
   - ID: `esbenp.prettier-vscode`
   - Code formatting

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "files.associations": {
    "*.js": "javascriptreact"
  }
}
```

### Prettier Configuration

Create `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

## Project Structure Deep Dive

### Source Code Organization

```
src/
├── components/          # Reusable UI components
│   ├── CTA.jsx         # Call-to-action component
│   ├── Footer.jsx      # Site footer
│   ├── Hero.jsx        # Homepage hero section
│   ├── Navbar.jsx      # Navigation bar
│   └── ...
├── pages/              # Route-specific page components
│   ├── About.jsx       # About page
│   ├── Contact.jsx     # Contact page
│   ├── Home.jsx        # Homepage
│   ├── Services.jsx    # Services overview
│   └── teams/          # Team-specific pages
├── assets/             # Static assets (images, videos, etc.)
│   ├── founder/        # Leadership photos
│   ├── home/           # Homepage images
│   ├── partners/       # Partner logos
│   └── ...
├── App.js              # Main app component with routing
├── index.js            # Application entry point
└── index.css           # Global styles
```

### Component Naming Conventions

- **Components:** PascalCase (`RequestDemoForm.jsx`)
- **Files:** camelCase for utilities, PascalCase for components
- **Assets:** kebab-case (`team-photo.jpg`)
- **Folders:** camelCase (`techteam`, `founder`)

## Development Workflow

### Git Workflow

1. **Create feature branch:**
   ```bash
   git checkout -b feature/component-name
   ```

2. **Make changes and commit:**
   ```bash
   git add .
   git commit -m "feat: add new component functionality"
   ```

3. **Push and create pull request:**
   ```bash
   git push origin feature/component-name
   ```

### Commit Message Convention

Follow conventional commits format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

### Branch Naming

- `feature/feature-name` - New features
- `fix/bug-description` - Bug fixes
- `docs/documentation-update` - Documentation updates
- `refactor/component-name` - Code refactoring

## Running the Application

### Development Mode

```bash
npm start
```

- Opens browser automatically
- Hot reload enabled
- Error overlay in browser
- Available at `http://localhost:3000`

### Production Build

```bash
npm run build
```

Creates optimized production build in `build/` folder

### Testing

```bash
npm test
```

Runs tests in interactive watch mode

### Linting

```bash
npm run lint
```

Checks code for style and error issues

## Component Development

### Creating New Components

1. **Create component file:**
   ```jsx
   // src/components/NewComponent.jsx
   import React from 'react';
   import { motion } from 'framer-motion';

   const NewComponent = ({ prop1, prop2 }) => {
     return (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         className="component-styles"
       >
         {/* Component content */}
       </motion.div>
     );
   };

   export default NewComponent;
   ```

2. **Add to parent component:**
   ```jsx
   import NewComponent from '../components/NewComponent';

   function ParentComponent() {
     return (
       <div>
         <NewComponent prop1="value1" prop2="value2" />
       </div>
     );
   }
   ```

### Component Best Practices

1. **Use functional components with hooks**
2. **Implement prop validation with PropTypes (optional)**
3. **Keep components small and focused**
4. **Use meaningful names and comments**
5. **Handle loading and error states**

### State Management

```jsx
import React, { useState, useEffect } from 'react';

const ComponentWithState = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data or perform side effects
    fetchData()
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>{/* Render data */}</div>;
};
```

## Styling Guidelines

### Tailwind CSS Usage

1. **Responsive design:**
   ```jsx
   <div className="w-full md:w-1/2 lg:w-1/3">
     Responsive width
   </div>
   ```

2. **Dark theme support:**
   ```jsx
   <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
     Theme-aware styling
   </div>
   ```

3. **Hover effects:**
   ```jsx
   <button className="bg-blue-500 hover:bg-blue-600 transition-colors">
     Hover me
   </button>
   ```

### Custom CSS (when needed)

```css
/* src/components/Component.module.css */
.customComponent {
  /* Custom styles when Tailwind isn't sufficient */
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
}
```

## Animation Implementation

### Framer Motion Patterns

1. **Basic animations:**
   ```jsx
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.5 }}
   >
     Content
   </motion.div>
   ```

2. **Scroll-triggered animations:**
   ```jsx
   <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
     viewport={{ once: true }}
   >
     Scroll to reveal
   </motion.div>
   ```

3. **Staggered animations:**
   ```jsx
   {items.map((item, index) => (
     <motion.div
       key={item.id}
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: index * 0.1 }}
     >
       {item.content}
     </motion.div>
   ))}
   ```

## Asset Management

### Image Handling

1. **Static imports:**
   ```jsx
   import logoImage from '../assets/logo.png';
   
   <img src={logoImage} alt="Logo" />
   ```

2. **Dynamic imports:**
   ```jsx
   const imagePath = require(`../assets/${category}/${filename}`);
   ```

3. **Fallback handling:**
   ```jsx
   <img 
     src={imagePath} 
     alt={altText}
     onError={(e) => {
       e.target.src = '/placeholder-image.jpg';
     }}
   />
   ```

### Asset Organization

- Use descriptive filenames
- Organize by feature/category
- Optimize images before adding
- Use appropriate formats (WebP, AVIF when possible)

## Testing Strategy

### Component Testing

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MyComponent from '../MyComponent';

test('renders component correctly', () => {
  render(
    <BrowserRouter>
      <MyComponent />
    </BrowserRouter>
  );
  
  expect(screen.getByText('Expected Text')).toBeInTheDocument();
});

test('handles user interaction', () => {
  render(<MyComponent />);
  
  const button = screen.getByRole('button');
  fireEvent.click(button);
  
  expect(screen.getByText('Button clicked')).toBeInTheDocument();
});
```

### Test Files Organization

```
src/
├── components/
│   ├── Component.jsx
│   └── __tests__/
│       └── Component.test.jsx
├── pages/
│   ├── Page.jsx
│   └── __tests__/
│       └── Page.test.jsx
└── utils/
    ├── helpers.js
    └── __tests__/
        └── helpers.test.js
```

## Debugging

### React Developer Tools

1. Install browser extension
2. Inspect component hierarchy
3. View props and state
4. Track re-renders

### Console Debugging

```jsx
// Conditional logging
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}

// Component debugging
useEffect(() => {
  console.log('Component mounted/updated', props);
}, [props]);
```

### Error Boundaries

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

## Performance Optimization

### Code Splitting

```jsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Memoization

```jsx
import { memo, useMemo, useCallback } from 'react';

const ExpensiveComponent = memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => processItem(item));
  }, [data]);

  const handleUpdate = useCallback((id) => {
    onUpdate(id);
  }, [onUpdate]);

  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} data={item} onUpdate={handleUpdate} />
      ))}
    </div>
  );
});
```

## Troubleshooting

### Common Issues

1. **Module not found errors:**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Port already in use:**
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   ```

3. **Hot reload not working:**
   - Check file watchers limit (Linux)
   - Restart development server
   - Clear browser cache

### Performance Issues

1. **Slow development server:**
   - Check for large files in src/
   - Exclude unnecessary files from watching
   - Increase Node.js memory limit

2. **Large bundle size:**
   ```bash
   npm run build
   npx webpack-bundle-analyzer build/static/js/*.js
   ```

### Environment Variables

Create `.env.local` for local development:

```bash
REACT_APP_API_URL=http://localhost:3001
REACT_APP_DEBUG=true
REACT_APP_VERSION=dev
```

## Code Quality

### ESLint Configuration

```json
{
  "extends": [
    "react-app",
    "react-app/jest"
  ],
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "warn",
    "prefer-const": "error"
  }
}
```

### Pre-commit Hooks

Install Husky for git hooks:

```bash
npm install --save-dev husky lint-staged
```

Configure in `package.json`:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

## Team Collaboration

### Code Review Checklist

- [ ] Code follows project conventions
- [ ] Components are properly tested
- [ ] No console.log statements in production
- [ ] Proper error handling implemented
- [ ] Accessibility considerations addressed
- [ ] Performance impact minimal
- [ ] Documentation updated

### Communication

- Use clear commit messages
- Document complex logic
- Add comments for future maintainers
- Update documentation when adding features

---

*This development guide is maintained by the INSPECTX development team. Last updated: August 2025*

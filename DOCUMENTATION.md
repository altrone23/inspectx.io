# INSPECTX - AI-Powered Inspection Solutions

## Project Overview

INSPECTX is a comprehensive React-based web application showcasing AI-powered industrial inspection solutions. The platform demonstrates cutting-edge drone technology, artificial intelligence, and automated inspection capabilities across multiple industries.

## Table of Contents

1. [Project Structure](#project-structure)
2. [Technology Stack](#technology-stack)
3. [Installation & Setup](#installation--setup)
4. [Component Architecture](#component-architecture)
5. [Page Structure](#page-structure)
6. [Features](#features)
7. [Team Management](#team-management)
8. [Styling & Design](#styling--design)
9. [Development Guidelines](#development-guidelines)
10. [Deployment](#deployment)

## Project Structure

```
inspectx.io/
├── public/
│   ├── favicon.jpg
│   ├── index.html
│   ├── logo.png
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── founder/           # Leadership team photos
│   │   ├── home/             # Homepage images
│   │   ├── partners/         # Partner company logos
│   │   ├── pilot/           # Pilot team photos
│   │   ├── slides/          # Service demonstration slides
│   │   ├── techteam/        # Technical team photos
│   │   └── training/        # Training materials
│   ├── components/          # Reusable React components
│   ├── pages/              # Main application pages
│   │   └── teams/          # Team-specific pages
│   ├── App.js              # Main application component
│   ├── index.js            # Application entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md              # Basic project information
```

## Technology Stack

### Frontend Framework
- **React 19.1.0** - Main UI framework
- **React Router DOM 7.5.0** - Client-side routing
- **React Router Hash Link 2.4.3** - Hash-based navigation

### Styling & Animation
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 12.6.3** - Animation library
- **React Icons 5.5.0** - Icon library

### Development Tools
- **React Scripts 5.0.1** - Build tools and development server
- **PostCSS 8.5.3** - CSS processing
- **Autoprefixer 10.4.21** - CSS vendor prefixing

### Testing
- **@testing-library/react** - React component testing
- **@testing-library/jest-dom** - Jest DOM matchers
- **@testing-library/user-event** - User interaction testing

### Performance & Analytics
- **@vercel/speed-insights 1.2.0** - Performance monitoring
- **web-vitals 2.1.4** - Core web vitals tracking

## Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bala1415/inspectx.io.git
   cd inspectx.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Build for production:**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Run tests:**
   ```bash
   npm test
   # or
   yarn test
   ```

## Component Architecture

### Core Components

#### 1. Navigation Components
- **Navbar.jsx** - Main navigation with dynamic hover effects
- **ScrollToTop.jsx** - Automatic scroll to top on route changes

#### 2. Layout Components
- **Hero.jsx** - Landing page hero section with video background
- **Footer.jsx** - Site-wide footer with company information
- **CTA.jsx** - Call-to-action component for demo requests

#### 3. Interactive Components
- **RequestDemoForm.jsx** - Modal form for demo requests
- **ServiceDemoRequest.jsx** - Service-specific demo requests
- **HomeSlideshow.jsx** - Automated image carousel

#### 4. Content Components
- **Industries.jsx** - Expandable industry service listings

### Component Features

#### Navbar Component
```jsx
// Dynamic hover effects with mouse tracking
const handleMouseMove = (e) => {
  setHoverX(e.clientX);
};

// Gradient background with interactive overlay
background: radial-gradient(circle at ${hoverX}px 50%, ...)
```

#### RequestDemoForm Component
- Multi-service selection
- Form validation
- Modal overlay with backdrop blur
- Service pre-selection capability

## Page Structure

### Main Pages

#### 1. Home (`/`)
- Hero section with video background
- Company partnerships display
- Founder quote section
- Industries overview
- Call-to-action sections

#### 2. About (`/about`)
- Company statistics
- Mission and service scope
- Timeline of milestones
- Team overview with navigation
- Vision statement

#### 3. Services (`/services`)
- Comprehensive service listings
- Interactive service demonstrations
- Technology showcases

#### 4. Contact (`/contact`)
- Contact form with validation
- Company information
- Location details

#### 5. Training (`/training`)
- Training program information
- Course materials
- Certification details

### Service-Specific Pages
- **Reliability Condition Monitoring** (`/services/reliability-condition-monitoring`)
- **Railway Track Inspection** (`/services/railway-track-inspection`)
- **Power Line Inspection** (`/services/power-line-inspection`)
- **Solar Panel Inspection** (`/services/solar-panel-inspection`)
- **Water Line Inspection** (`/services/water-line-inspection`)

### Team Pages

#### 1. Leadership Team (`/teams/leadership`)
- Executive profiles with photos
- Professional backgrounds
- Areas of expertise
- Contact information

#### 2. Technical Experts (`/teams/technical`)
- Technical team member profiles
- Specializations and achievements
- Technology stack overview
- Innovation highlights

#### 3. Pilots (`/teams/pilots`)
- Pilot certifications and experience
- Safety statistics
- Equipment fleet information
- Modal profile views

#### 4. Support Staff (`/teams/support`)
- Support team information
- Service offerings
- Response time metrics
- Availability details

## Features

### 1. Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

### 2. Animation System
- Framer Motion integration
- Scroll-triggered animations
- Hover effects and transitions
- Page transition animations

### 3. Image Management
- Dynamic image imports
- Fallback image handling
- Optimized loading
- Responsive image scaling

### 4. Form Handling
- Input validation
- Multi-select capabilities
- Form state management
- Submission feedback

### 5. Navigation
- Smooth scrolling
- Hash-based routing
- Breadcrumb navigation
- Mobile menu support

## Team Management

### Leadership Team Data Structure
```javascript
const leaders = [
  {
    name: "Ajay Kumar",
    role: "CEO & Founder",
    image: "src/assets/founder/ajay.jpg",
    bio: "Visionary leader...",
    expertise: ["Strategic Planning", "Business Development"],
    linkedin: "#",
    email: "ajay@inspectx.io"
  }
];
```

### Technical Team Data Structure
```javascript
const experts = [
  {
    name: "Balavignesh A.U",
    role: "AI & Data Science Engineer | Full Stack Developer",
    image: require('../../assets/techteam/Bala.jpg'),
    specialties: ["Machine Learning", "Computer Vision"],
    experience: "Detailed experience description...",
    achievements: ["Achievement 1", "Achievement 2"]
  }
];
```

### Team Image Requirements
- **Format:** JPG/PNG
- **Size:** Recommended 400x400px minimum
- **Aspect Ratio:** 1:1 (square) for consistent display
- **Location:** 
  - Leadership: `/src/assets/founder/`
  - Technical: `/src/assets/techteam/`
  - Pilots: `/src/assets/pilot/`

## Styling & Design

### Tailwind CSS Configuration
```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Color Scheme
- **Primary Blue:** `blue-400` to `blue-600`
- **Secondary Purple:** `purple-400` to `purple-600`
- **Accent Colors:** `green-400`, `orange-400`, `yellow-400`
- **Backgrounds:** `gray-900`, `gray-800`, `black`
- **Text:** `white`, `gray-300`, `gray-200`

### Animation Patterns
```jsx
// Fade in from bottom
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}

// Staggered animations
transition={{ delay: index * 0.2 }}

// Hover effects
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

## Development Guidelines

### 1. Code Organization
- Use functional components with hooks
- Implement consistent naming conventions
- Organize imports logically
- Add meaningful comments for complex logic

### 2. Component Best Practices
- Keep components focused and reusable
- Use props for customization
- Implement error boundaries where needed
- Optimize for performance with React.memo when appropriate

### 3. State Management
- Use local state for component-specific data
- Implement useEffect for side effects
- Handle loading and error states appropriately

### 4. Accessibility
- Use semantic HTML elements
- Include alt text for images
- Implement keyboard navigation
- Ensure color contrast compliance

### 5. Performance Optimization
- Lazy load images and components
- Minimize bundle size
- Use efficient re-rendering strategies
- Implement proper caching

## File Naming Conventions

### Components
- PascalCase for component files: `RequestDemoForm.jsx`
- camelCase for utility functions: `handleSubmit`
- kebab-case for asset files: `logo-image.png`

### Assets
- Descriptive names with context: `founder-ajay.jpg`
- Organized by category in subfolders
- Consistent file extensions

## Environment Setup

### Development Environment
```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build", 
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

### Build Configuration
- **Development:** `npm start` - Hot reload on localhost:3000
- **Production:** `npm run build` - Optimized build in `/build` folder
- **Testing:** `npm test` - Interactive test runner

## Deployment

### Build Process
1. Run production build: `npm run build`
2. Test the build locally: `npx serve -s build`
3. Deploy the `/build` folder to hosting platform

### Recommended Hosting Platforms
- **Vercel** - Automatic deployments from Git
- **Netlify** - Continuous deployment with form handling
- **AWS S3 + CloudFront** - Scalable static hosting
- **GitHub Pages** - Free hosting for public repositories

### Environment Variables
Create `.env` file for environment-specific configurations:
```
REACT_APP_API_URL=your_api_url
REACT_APP_ANALYTICS_ID=your_analytics_id
```

## Troubleshooting

### Common Issues

#### 1. Image Import Errors
```javascript
// Correct way to import images
const image = require('../../assets/folder/image.jpg');

// Or using ES6 imports
import image from '../../assets/folder/image.jpg';
```

#### 2. Routing Issues
- Ensure all routes are defined in `App.js`
- Use exact paths for specific routes
- Implement fallback routes for 404 handling

#### 3. Build Failures
- Check for unused imports
- Verify all image paths are correct
- Ensure all dependencies are installed

### Performance Optimization Tips

1. **Image Optimization:**
   - Compress images before adding to assets
   - Use appropriate image formats (WebP, AVIF)
   - Implement lazy loading for below-fold images

2. **Bundle Optimization:**
   - Analyze bundle size with `npm run build`
   - Remove unused dependencies
   - Implement code splitting for large components

3. **Runtime Performance:**
   - Use React.memo for expensive components
   - Implement virtual scrolling for large lists
   - Optimize animation performance

## Contributing

### Development Workflow
1. Create feature branch from main
2. Implement changes with proper testing
3. Ensure code follows project conventions
4. Submit pull request with detailed description
5. Address review feedback before merging

### Code Review Checklist
- [ ] Code follows project conventions
- [ ] Components are properly tested
- [ ] Accessibility standards are met
- [ ] Performance impact is minimal
- [ ] Documentation is updated

## Support & Maintenance

### Regular Maintenance Tasks
- Update dependencies monthly
- Monitor performance metrics
- Review and update documentation
- Test on various devices and browsers
- Backup project assets regularly

### Contact Information
- **Technical Lead:** Balavignesh A.U
- **Project Manager:** [Contact Information]
- **Design Lead:** [Contact Information]

---

*This documentation is maintained by the INSPECTX development team. Last updated: August 2025*

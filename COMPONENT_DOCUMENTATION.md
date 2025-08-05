# Component Documentation

## Overview

This document provides detailed information about all React components in the INSPECTX project, including their props, usage examples, and implementation details.

## Core Components

### Navigation Components

#### Navbar Component
**File:** `src/components/Navbar.jsx`

**Purpose:** Main navigation component with dynamic hover effects and responsive design.

**Features:**
- Dynamic gradient hover effects based on mouse position
- Responsive mobile menu
- Smooth transitions and animations
- Logo integration

**Props:** None (self-contained)

**Usage:**
```jsx
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      {/* Rest of app */}
    </div>
  );
}
```

**Key Methods:**
- `handleMouseMove(e)` - Tracks mouse position for hover effects
- `handleMouseLeave()` - Resets hover state

---

#### ScrollToTop Component
**File:** `src/components/ScrollToTop.jsx`

**Purpose:** Automatically scrolls to top when route changes.

**Props:** None

**Usage:**
```jsx
import ScrollToTop from './components/ScrollToTop';

<Router>
  <ScrollToTop />
  <Routes>
    {/* Your routes */}
  </Routes>
</Router>
```

### Layout Components

#### Hero Component
**File:** `src/components/Hero.jsx`

**Purpose:** Landing page hero section with video background and call-to-action.

**Features:**
- Full-screen video background
- Animated text and buttons
- Demo request modal integration
- Responsive design

**State:**
```javascript
const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
```

**Methods:**
- `openDemoForm()` - Opens demo request modal
- `closeDemoForm()` - Closes demo request modal

---

#### Footer Component
**File:** `src/components/Footer.jsx`

**Purpose:** Site-wide footer with company information and links.

**Features:**
- Company contact information
- Social media links
- Copyright information
- Responsive layout

### Interactive Components

#### RequestDemoForm Component
**File:** `src/components/RequestDemoForm.jsx`

**Purpose:** Modal form for demo requests with service selection.

**Props:**
```javascript
{
  isOpen: boolean,              // Controls modal visibility
  onClose: function,            // Callback to close modal
  preselectedService: string    // Optional pre-selected service
}
```

**State:**
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  company: '',
  selectedServices: [],
  message: ''
});
```

**Available Services:**
- Reliability Condition Monitoring (RCM)
- Railway Track Inspection
- Power Line Inspection
- Solar Panel Inspection
- Water Line Inspection

**Usage:**
```jsx
<RequestDemoForm 
  isOpen={isDemoFormOpen} 
  onClose={closeDemoForm}
  preselectedService="visual-ai"
/>
```

**Methods:**
- `handleSubmit(e)` - Form submission handler
- `handleChange(e)` - Input change handler
- `handleServiceToggle(serviceId)` - Service selection handler

---

#### ServiceDemoRequest Component
**File:** `src/components/ServiceDemoRequest.jsx`

**Purpose:** Service-specific demo request wrapper.

**Props:**
```javascript
{
  serviceName: string,          // Display name of service
  serviceId: string,            // Unique service identifier
  isDemoFormOpen: boolean,      // Modal state
  openDemoForm: function,       // Open modal function
  closeDemoForm: function       // Close modal function
}
```

**Usage:**
```jsx
<ServiceDemoRequest
  serviceName="Power Line Inspection"
  serviceId="power-inspection"
  isDemoFormOpen={isDemoFormOpen}
  openDemoForm={openDemoForm}
  closeDemoForm={closeDemoForm}
/>
```

### Content Components

#### HomeSlideshow Component
**File:** `src/components/HomeSlideshow.jsx`

**Purpose:** Automated image carousel for homepage.

**Features:**
- Auto-advancing slides
- Manual navigation controls
- Smooth transitions
- Responsive images

**State:**
```javascript
const [currentSlide, setCurrentSlide] = useState(0);
```

**Configuration:**
```javascript
const homeImages = [home1, home2, home3, home4, home5, home6];
```

**Methods:**
- `nextSlide()` - Advance to next slide
- `prevSlide()` - Go to previous slide

---

#### Industries Component
**File:** `src/components/Industries.jsx`

**Purpose:** Expandable industry service listings.

**Features:**
- Accordion-style expansion
- Service filtering
- Industry-specific content
- Animated transitions

## Page Components

### Main Pages

#### Home Component
**File:** `src/pages/Home.jsx`

**Purpose:** Main landing page with hero section and company overview.

**Structure:**
- Hero section with video
- Partnerships display
- Founder quote
- Industries overview
- Call-to-action sections

**State Management:**
```javascript
const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
```

---

#### About Component
**File:** `src/pages/About.jsx`

**Purpose:** Company information and team overview.

**Features:**
- Company statistics
- Mission statement
- Timeline of milestones
- Team navigation links

**Data Structures:**
```javascript
const stats = [
  { icon: <FaGlobe />, number: "3+", label: "Countries Served" },
  { icon: <FaIndustry />, number: "60+", label: "Inspections Completed" }
];

const milestones = [
  { year: "2024", title: "Foundation", description: "..." }
];
```

---

#### Contact Component
**File:** `src/pages/Contact.jsx`

**Purpose:** Contact form and company information.

**State:**
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

const [formStatus, setFormStatus] = useState({
  submitted: false,
  error: false,
  message: ''
});
```

### Team Pages

#### LeadershipTeam Component
**File:** `src/pages/teams/LeadershipTeam.jsx`

**Purpose:** Leadership team profiles and information.

**Data Structure:**
```javascript
const leaders = [
  {
    name: "Ajay Kumar",
    role: "CEO & Founder", 
    image: require('../../assets/founder/ajay.jpg'),
    bio: "...",
    expertise: ["Strategic Planning", "Business Development"],
    linkedin: "#",
    email: "ajay@inspectx.io"
  }
];
```

**Features:**
- Executive profiles with photos
- Professional backgrounds
- Contact information
- Social media links

---

#### TechnicalExperts Component
**File:** `src/pages/teams/TechnicalExperts.jsx`

**Purpose:** Technical team member showcase.

**Data Structure:**
```javascript
const experts = [
  {
    name: "Balavignesh A.U",
    role: "AI & Data Science Engineer | Full Stack Developer",
    image: require('../../assets/techteam/Bala.jpg'),
    specialties: ["Machine Learning", "Computer Vision"],
    experience: "...",
    achievements: ["Achievement 1", "Achievement 2"]
  }
];
```

**Features:**
- Technical specializations
- Achievement listings
- Technology stack overview
- Professional experience

---

#### Pilots Component
**File:** `src/pages/teams/Pilots.jsx`

**Purpose:** Pilot team information and certifications.

**Features:**
- Pilot certifications
- Safety statistics
- Equipment information
- Modal profile views

**State:**
```javascript
const [selectedPilot, setSelectedPilot] = useState(null);
```

---

#### SupportStaff Component
**File:** `src/pages/teams/SupportStaff.jsx`

**Purpose:** Support team and services information.

**Data Structures:**
```javascript
const services = [
  {
    title: "24/7 Customer Support",
    description: "...",
    features: ["Instant chat support", "Phone support"]
  }
];

const supportStats = [
  { metric: "<30min", label: "Average Response Time", icon: <FaHeadset /> }
];
```

### Service Pages

All service pages follow a similar structure:

#### Common Service Page Features
- Service overview and benefits
- Technology demonstrations
- Image galleries with slides
- Demo request integration
- Technical specifications

#### Service Page Template Structure
```javascript
const ServicePage = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  
  const openDemoForm = () => setIsDemoFormOpen(true);
  const closeDemoForm = () => setIsDemoFormOpen(false);
  
  return (
    <div>
      {/* Hero section */}
      {/* Service details */}
      {/* Image gallery */}
      {/* Demo request */}
      <ServiceDemoRequest 
        serviceName="Service Name"
        serviceId="service-id"
        isDemoFormOpen={isDemoFormOpen}
        openDemoForm={openDemoForm}
        closeDemoForm={closeDemoForm}
      />
    </div>
  );
};
```

## Component Best Practices

### State Management
- Use `useState` for local component state
- Implement `useEffect` for side effects
- Pass state down through props when needed

### Event Handling
```javascript
// Form handling
const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission
};

// Input changes
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
```

### Animation Implementation
```javascript
// Framer Motion animations
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* Content */}
</motion.div>
```

### Image Handling
```javascript
// Dynamic image imports
const image = require('../../assets/folder/image.jpg');

// Error handling for missing images
{expert.image ? (
  <img src={expert.image} alt={expert.name} />
) : (
  <div className="fallback-avatar">
    {expert.name.charAt(0)}
  </div>
)}
```

### Responsive Design
```jsx
// Tailwind responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Content */}
</div>
```

## Testing Components

### Component Testing Example
```javascript
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders navigation links', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
});
```

### User Interaction Testing
```javascript
import userEvent from '@testing-library/user-event';

test('opens demo form when button clicked', async () => {
  const user = userEvent.setup();
  render(<Hero />);
  
  const demoButton = screen.getByText('Request a Demo');
  await user.click(demoButton);
  
  expect(screen.getByText('Demo Request Form')).toBeInTheDocument();
});
```

## Performance Optimization

### React.memo Usage
```javascript
import React, { memo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  return (
    <div>
      {/* Expensive rendering logic */}
    </div>
  );
});
```

### useCallback for Functions
```javascript
import { useCallback } from 'react';

const ParentComponent = () => {
  const handleClick = useCallback(() => {
    // Handle click
  }, []);
  
  return <ChildComponent onClick={handleClick} />;
};
```

## Accessibility Guidelines

### Semantic HTML
```jsx
<nav role="navigation">
  <ul>
    <li><a href="/home">Home</a></li>
  </ul>
</nav>
```

### ARIA Labels
```jsx
<button 
  aria-label="Open demo request form"
  onClick={openDemoForm}
>
  Request Demo
</button>
```

### Keyboard Navigation
```javascript
const handleKeyDown = (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleClick();
  }
};
```

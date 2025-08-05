# API Documentation

## Overview

This document outlines the API structure and data flow for the INSPECTX project. While currently the project operates with static data, this documentation serves as a blueprint for future API integration.

## Current Data Structure

### Team Members API

#### Leadership Team Endpoint
**Future Endpoint:** `GET /api/team/leadership`

**Current Data Structure:**
```javascript
{
  "leaders": [
    {
      "id": 1,
      "name": "Ajay Kumar",
      "role": "CEO & Founder",
      "image": "/assets/founder/ajay.jpg",
      "bio": "Experienced leader with 15+ years in technology and business development...",
      "expertise": ["Strategic Planning", "Business Development", "Technology Innovation"],
      "linkedin": "https://linkedin.com/in/ajay-kumar",
      "email": "ajay@inspectx.io",
      "phone": "+1-234-567-8900"
    },
    {
      "id": 2,
      "name": "Ashook Yarlagadda",
      "role": "Co-Founder & CTO",
      "image": "/assets/founder/ashok.jpg",
      "bio": "Technical visionary with deep expertise in AI and machine learning...",
      "expertise": ["AI/ML", "Technical Architecture", "Product Development"],
      "linkedin": "https://linkedin.com/in/ashook-yarlagadda",
      "email": "ashook@inspectx.io",
      "phone": "+1-234-567-8901"
    }
  ]
}
```

#### Technical Experts Endpoint
**Future Endpoint:** `GET /api/team/technical`

**Current Data Structure:**
```javascript
{
  "experts": [
    {
      "id": 1,
      "name": "Balavignesh A.U",
      "role": "AI & Data Science Engineer | Full Stack Developer",
      "image": "/assets/techteam/Bala.jpg",
      "specialties": [
        "Machine Learning",
        "Computer Vision", 
        "Neural Networks",
        "Full Stack Development",
        "Data Analysis"
      ],
      "experience": "Passionate AI & Data Science engineer...",
      "achievements": [
        "Built and deployed full-stack apps integrating AI features",
        "Worked on projects involving image recognition, NLP, and data pipelines"
      ],
      "technologies": ["Python", "JavaScript", "React", "TensorFlow", "PyTorch"],
      "linkedin": "https://linkedin.com/in/balavignesh-au",
      "github": "https://github.com/bala1415"
    }
  ]
}
```

### Services API

#### Services List Endpoint
**Future Endpoint:** `GET /api/services`

**Current Data Structure:**
```javascript
{
  "services": [
    {
      "id": "reliability-condition-monitoring",
      "name": "Reliability Condition Monitoring (RCM)",
      "description": "Advanced AI-powered monitoring for industrial equipment",
      "features": [
        "Real-time condition monitoring",
        "Predictive maintenance alerts",
        "Asset performance analytics",
        "Automated reporting"
      ],
      "industries": ["Manufacturing", "Energy", "Oil & Gas"],
      "pricing": "Contact for pricing",
      "demo_available": true
    },
    {
      "id": "railway-track-inspection", 
      "name": "Railway Track Inspection",
      "description": "Automated railway infrastructure inspection using drones",
      "features": [
        "Track condition assessment",
        "Rail defect detection",
        "Infrastructure monitoring",
        "Safety compliance reporting"
      ],
      "industries": ["Transportation", "Railway"],
      "pricing": "Contact for pricing",
      "demo_available": true
    }
  ]
}
```

### Contact Forms API

#### Demo Request Endpoint
**Future Endpoint:** `POST /api/demo-request`

**Request Body:**
```javascript
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "company": "string", 
  "selectedServices": ["string"],
  "message": "string",
  "timestamp": "ISO 8601 date string"
}
```

**Response:**
```javascript
{
  "success": true,
  "message": "Demo request submitted successfully",
  "requestId": "unique_identifier",
  "estimatedResponseTime": "24 hours"
}
```

#### Contact Form Endpoint
**Future Endpoint:** `POST /api/contact`

**Request Body:**
```javascript
{
  "name": "string",
  "email": "string",
  "message": "string",
  "subject": "string",
  "timestamp": "ISO 8601 date string"
}
```

## Error Handling

### Standard Error Response
```javascript
{
  "error": true,
  "message": "Error description",
  "code": "ERROR_CODE",
  "timestamp": "ISO 8601 date string"
}
```

### Common Error Codes
- `VALIDATION_ERROR` - Invalid input data
- `NOT_FOUND` - Requested resource not found
- `SERVER_ERROR` - Internal server error
- `RATE_LIMIT_EXCEEDED` - Too many requests

## Authentication (Future Implementation)

### JWT Token Structure
```javascript
{
  "header": {
    "alg": "HS256",
    "typ": "JWT"
  },
  "payload": {
    "sub": "user_id",
    "name": "User Name",
    "role": "admin|user|viewer",
    "iat": 1234567890,
    "exp": 1234567890
  }
}
```

## Rate Limiting (Future Implementation)

### Limits by Endpoint
- `/api/contact` - 5 requests per hour per IP
- `/api/demo-request` - 3 requests per hour per IP
- `/api/team/*` - 100 requests per hour per IP
- `/api/services/*` - 100 requests per hour per IP

## Data Validation

### Email Validation
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

### Phone Validation
```javascript
const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
```

### Required Fields by Endpoint

#### Demo Request
- `name` (string, 2-50 characters)
- `email` (valid email format)
- `selectedServices` (array, at least 1 service)

#### Contact Form
- `name` (string, 2-50 characters)
- `email` (valid email format)
- `message` (string, 10-1000 characters)

## Future API Enhancements

### Analytics Endpoints
- `GET /api/analytics/page-views`
- `GET /api/analytics/demo-requests`
- `GET /api/analytics/user-engagement`

### Content Management
- `GET /api/content/pages`
- `PUT /api/content/pages/:id`
- `GET /api/content/media`

### File Upload
- `POST /api/upload/team-photos`
- `POST /api/upload/service-images`
- `DELETE /api/upload/:fileId`

## Implementation Notes

### Current State
The project currently uses static data defined in React components. Future API integration points are clearly marked with comments in the codebase.

### Migration Strategy
1. Implement backend API with Node.js/Express
2. Replace static data with API calls
3. Add authentication and authorization
4. Implement caching strategies
5. Add real-time features with WebSockets

### Security Considerations
- Implement CORS properly
- Use HTTPS for all API calls
- Sanitize all user inputs
- Implement rate limiting
- Add request logging
- Use environment variables for sensitive data

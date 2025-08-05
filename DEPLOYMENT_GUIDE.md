# Deployment Guide

## Overview

This guide provides comprehensive instructions for deploying the INSPECTX React application to various hosting platforms and environments.

## Prerequisites

Before deploying, ensure you have:

- Node.js (v14 or higher) installed
- Project dependencies installed (`npm install`)
- Production-ready build created
- Hosting platform account set up

## Build Process

### Creating Production Build

1. **Clean previous builds:**
   ```bash
   rm -rf build/
   ```

2. **Create optimized build:**
   ```bash
   npm run build
   ```

3. **Verify build output:**
   ```bash
   ls -la build/
   ```

### Build Optimization

The production build includes:

- Minified JavaScript and CSS
- Optimized images and assets
- Cache-friendly file naming with hashes
- Bundle splitting for better loading performance

## Hosting Platforms

### Vercel Deployment

**Recommended for:** Easy deployment with Git integration

#### Automatic Deployment

1. **Connect to Git repository:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure project settings

2. **Project configuration:**
   ```json
   {
     "name": "inspectx-io",
     "buildCommand": "npm run build",
     "outputDirectory": "build",
     "framework": "create-react-app"
   }
   ```

3. **Environment variables (if needed):**
   ```bash
   REACT_APP_API_URL=https://api.inspectx.io
   REACT_APP_ENVIRONMENT=production
   ```

#### Manual Deployment

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

### Netlify Deployment

**Recommended for:** Static site hosting with form handling

#### Via Git Integration

1. **Connect repository:**
   - Go to [netlify.com](https://netlify.com)
   - New site from Git
   - Select your repository

2. **Build settings:**
   ```yaml
   Build command: npm run build
   Publish directory: build
   ```

3. **Custom headers (optional):**
   Create `public/_headers`:
   ```
   /*
     X-Frame-Options: DENY
     X-XSS-Protection: 1; mode=block
     X-Content-Type-Options: nosniff
   ```

#### Via CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=build
   ```

### AWS S3 + CloudFront

**Recommended for:** Scalable hosting with CDN

#### S3 Bucket Setup

1. **Create S3 bucket:**
   ```bash
   aws s3 mb s3://inspectx-io-website
   ```

2. **Configure bucket for static hosting:**
   ```bash
   aws s3 website s3://inspectx-io-website \
     --index-document index.html \
     --error-document index.html
   ```

3. **Upload build files:**
   ```bash
   aws s3 sync build/ s3://inspectx-io-website --delete
   ```

#### CloudFront Distribution

1. **Create distribution:**
   ```json
   {
     "Origins": [{
       "DomainName": "inspectx-io-website.s3.amazonaws.com",
       "Id": "S3-inspectx-io-website"
     }],
     "DefaultCacheBehavior": {
       "TargetOriginId": "S3-inspectx-io-website",
       "ViewerProtocolPolicy": "redirect-to-https"
     }
   }
   ```

### GitHub Pages

**Recommended for:** Free hosting for public repositories

#### Setup

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     },
     "homepage": "https://yourusername.github.io/inspectx.io"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### DigitalOcean App Platform

**Recommended for:** Full-stack applications with backend

#### Configuration

1. **Create app spec:**
   ```yaml
   name: inspectx-io
   services:
   - name: web
     source_dir: /
     github:
       repo: yourusername/inspectx.io
       branch: main
     run_command: npm start
     build_command: npm run build
     http_port: 3000
   ```

2. **Deploy via CLI:**
   ```bash
   doctl apps create --spec app.yaml
   ```

## Custom Domain Setup

### DNS Configuration

1. **Add CNAME record:**
   ```
   Type: CNAME
   Name: www
   Value: your-app.vercel.app
   ```

2. **Add A record for apex domain:**
   ```
   Type: A
   Name: @
   Value: 76.76.19.61 (Vercel IP)
   ```

### SSL Certificate

Most hosting platforms provide automatic SSL certificates:

- **Vercel:** Automatic SSL with Let's Encrypt
- **Netlify:** Automatic SSL for custom domains
- **CloudFront:** AWS Certificate Manager integration

## Environment Configuration

### Environment Variables

Create `.env.production` file:

```bash
REACT_APP_API_URL=https://api.inspectx.io
REACT_APP_ANALYTICS_ID=GA_TRACKING_ID
REACT_APP_ENVIRONMENT=production
REACT_APP_VERSION=1.0.0
```

### Build-time Configuration

```javascript
// src/config/environment.js
const config = {
  development: {
    apiUrl: 'http://localhost:3001',
    analytics: false
  },
  production: {
    apiUrl: process.env.REACT_APP_API_URL,
    analytics: true
  }
};

export default config[process.env.NODE_ENV || 'development'];
```

## Performance Optimization

### Bundle Analysis

1. **Install bundle analyzer:**
   ```bash
   npm install --save-dev webpack-bundle-analyzer
   ```

2. **Analyze bundle:**
   ```bash
   npm run build
   npx webpack-bundle-analyzer build/static/js/*.js
   ```

### Optimization Strategies

1. **Code splitting:**
   ```javascript
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

2. **Image optimization:**
   ```bash
   # Install imagemin
   npm install --save-dev imagemin imagemin-webp
   ```

3. **Service worker for caching:**
   ```javascript
   // public/sw.js
   const CACHE_NAME = 'inspectx-v1';
   const urlsToCache = [
     '/',
     '/static/js/bundle.js',
     '/static/css/main.css'
   ];
   ```

## Monitoring and Analytics

### Performance Monitoring

1. **Web Vitals tracking:**
   ```javascript
   // src/reportWebVitals.js
   import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
   
   function sendToAnalytics(metric) {
     // Send to your analytics service
   }
   
   getCLS(sendToAnalytics);
   getFID(sendToAnalytics);
   ```

2. **Error tracking:**
   ```bash
   npm install @sentry/react
   ```

### Analytics Setup

1. **Google Analytics:**
   ```javascript
   // src/components/Analytics.js
   import { useEffect } from 'react';
   import { useLocation } from 'react-router-dom';
   
   function Analytics() {
     const location = useLocation();
   
     useEffect(() => {
       if (window.gtag) {
         window.gtag('config', 'GA_TRACKING_ID', {
           page_path: location.pathname,
         });
       }
     }, [location]);
   
     return null;
   }
   ```

## Security Considerations

### Content Security Policy

Add to `public/index.html`:

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline'; 
               img-src 'self' data: https:;">
```

### Security Headers

Configure in hosting platform:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

## Backup and Recovery

### Automated Backups

1. **Source code:** Git repository (GitHub/GitLab)
2. **Build artifacts:** CI/CD pipeline storage
3. **Assets:** Cloud storage backups

### Recovery Procedures

1. **Rollback deployment:**
   ```bash
   # Vercel
   vercel rollback
   
   # Netlify
   netlify sites:list
   netlify api listSiteDeploys --site-id=SITE_ID
   ```

2. **Restore from backup:**
   ```bash
   git checkout previous-working-commit
   npm run build
   npm run deploy
   ```

## CI/CD Pipeline

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test -- --coverage --watchAll=false
    
    - name: Build application
      run: npm run build
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## Troubleshooting

### Common Deployment Issues

1. **Build failures:**
   ```bash
   # Clear cache
   npm ci
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Routing issues (404 on refresh):**
   ```javascript
   // Netlify: Add _redirects file
   /*    /index.html   200
   
   // Apache: Add .htaccess
   RewriteEngine On
   RewriteRule ^(?!.*\.).*$ /index.html [L]
   ```

3. **Large bundle size:**
   ```bash
   # Analyze and optimize
   npm run build
   npx webpack-bundle-analyzer build/static/js/*.js
   ```

### Health Checks

1. **Deployment verification:**
   ```bash
   curl -I https://your-domain.com
   ```

2. **Performance testing:**
   ```bash
   npx lighthouse https://your-domain.com
   ```

## Maintenance

### Regular Tasks

1. **Update dependencies monthly:**
   ```bash
   npm audit
   npm update
   ```

2. **Monitor performance:**
   - Core Web Vitals
   - Page load times
   - Error rates

3. **Security updates:**
   ```bash
   npm audit fix
   ```

### Scaling Considerations

1. **CDN optimization**
2. **Image optimization**
3. **Caching strategies**
4. **Progressive Web App features**

---

*This deployment guide is maintained by the INSPECTX development team. Last updated: August 2025*

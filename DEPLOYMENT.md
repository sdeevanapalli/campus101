# Deployment Guide - BITS Campus Guide

## 🚀 Quick Deployment Options

### 1. Vercel (Recommended)

**Step 1: Build the project**
```bash
npm run build
```

**Step 2: Install Vercel CLI**
```bash
npm i -g vercel
```

**Step 3: Deploy**
```bash
vercel --prod
```

**Environment Setup:**
- Add `G-9EG5HKKXP1` to Google Analytics if needed
- Configure domain settings in Vercel dashboard

### 2. Netlify

**Step 1: Build the project**
```bash
npm run build
```

**Step 2: Install Netlify CLI**
```bash
npm i -g netlify-cli
```

**Step 3: Deploy**
```bash
netlify deploy --prod --dir=dist
```

### 3. GitHub Pages

**Step 1: Update `vite.config.ts`**
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repository-name/'
})
```

**Step 2: Install gh-pages**
```bash
npm install --save-dev gh-pages
```

**Step 3: Add deploy script to `package.json`**
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

**Step 4: Deploy**
```bash
npm run deploy
```

## 📋 Pre-Deployment Checklist

### ✅ Required Tasks

- [ ] **Replace placeholder images** with actual campus photos
- [ ] **Update Google Analytics ID** if different from current
- [ ] **Verify all campus data** for accuracy
- [ ] **Test all routes** in production build
- [ ] **Check mobile responsiveness** on different devices
- [ ] **Optimize images** for web (compress, resize)

### 🔧 Optional Enhancements

- [ ] **Add custom domain** for professional URL
- [ ] **Setup CDN** for faster image loading
- [ ] **Enable HTTPS** (automatic on most platforms)
- [ ] **Add error tracking** (Sentry, etc.)
- [ ] **Setup monitoring** (Uptime Robot, etc.)

## 🌐 Environment Variables

Set these in your deployment platform:

```env
# Google Analytics (optional)
VITE_GA_ID=G-9EG5HKKXP1

# Vercel Analytics (automatic on Vercel)
VERCEL_ANALYTICS_ID=auto
```

## 📱 Post-Deployment Testing

### Core Functionality
1. **Landing Page**: Verify hero parallax and 3D cards work
2. **Navigation**: Test all campus links
3. **Maps**: Check interactive maps load correctly
4. **Mobile**: Test sidebar, collapsible sections
5. **Dark Mode**: Verify theme toggle works
6. **Performance**: Check page load speeds

### Campus-Specific
1. **Hyderabad**: Verify all locations, outlets, contacts
2. **Goa**: Check map coordinates, facility info
3. **Pilani**: Validate historical data accuracy

## 🔄 Continuous Deployment

### GitHub Actions (Example)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## 🛠 Troubleshooting

### Common Issues

**Images not loading:**
- Check file paths in `public/images/`
- Verify image names match data file
- Ensure images are optimized (<2MB each)

**Maps not rendering:**
- Check internet connection on deployment
- Verify Leaflet CSS is included
- Test map coordinates are correct

**Routing issues:**
- Configure server for SPA routing
- Add `_redirects` file for Netlify
- Use `404.html` fallback for GitHub Pages

**Performance issues:**
- Compress images (use WebP format)
- Enable gzip compression
- Add loading states for components

## 📊 Analytics Setup

### Google Analytics 4
1. Create GA4 property
2. Update tracking ID in `src/App.tsx`
3. Verify events are firing correctly

### Vercel Analytics
Automatically enabled on Vercel deployments.

## 🔒 Security Considerations

- **HTTPS**: Ensure SSL certificate is active
- **Content Security Policy**: Add if needed
- **Rate Limiting**: Consider for API endpoints (future)
- **Privacy**: Update privacy policy for analytics

## 📈 Performance Monitoring

### Recommended Tools
- **Lighthouse**: Built into Chrome DevTools
- **PageSpeed Insights**: Google's performance tool
- **GTmetrix**: Comprehensive performance analysis
- **Vercel Analytics**: Real user monitoring

### Target Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s

---

## 🎉 You're Ready to Deploy!

Your BITS Campus Guide is now ready for production. Remember to:

1. **Test thoroughly** before going live
2. **Monitor performance** after deployment
3. **Gather user feedback** for improvements
4. **Keep campus data updated** regularly

**Happy deployment! 🚀**
# Aman Waghmare - Premium 3D Data Science Portfolio

A modern, production-ready portfolio website showcasing projects, skills, and experience in Data Science, Machine Learning, and Full-Stack Development.

## 🎯 Features

### Core Features
- **Interactive 3D Hero Section** - Mouse-responsive data sphere visualization using Three.js and React Three Fiber
- **Dark Modern UI** - Professional dark theme with electric blue accents
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Performance Optimized** - Lazy loading, code splitting, and optimized 3D rendering
- **Accessible** - Full keyboard navigation and WCAG compliance
- **Recruiter Mode** - Quick one-page overview for recruiters
- **Smooth Animations** - Subtle, professional animations with Framer Motion
- **Project Case Studies** - Detailed project modals with methodology and results

### Sections
- **Hero** - Engaging introduction with 3D visualization
- **About** - Professional summary and background
- **Skills** - Interactive skill cards with 35+ technologies
- **Projects** - 4+ featured projects with detailed case studies
- **Education** - Timeline of education and learning path
- **Resume** - Download and view resume
- **Contact** - Contact form and social links
- **Recruiter View** - Quick recruiter-focused overview

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/aman-2022/portfolio
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Create environment file**
```bash
cp .env.example .env.local
```

4. **Update configuration** (Optional)
Edit `.env.local` to update:
- GitHub username for repo integration
- Formspree endpoint for contact form
- Resume download path

5. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the portfolio in action!

## 📦 Build & Deployment

### Local Build
```bash
npm run build
npm run preview
```

### Deploy to Vercel (Recommended)

1. **Push code to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect Vite configuration

3. **Deploy**
- Vercel will automatically build and deploy on push

**Custom Domain:**
- In Vercel dashboard, go to Settings > Domains
- Add your custom domain (e.g., amanwaghmare.dev)

## 🔧 Configuration

### Update Personal Information

#### Resume Path
Update `/src/sections/Resume.jsx`:
```javascript
href="/resume/Aman_Waghmare_Resume.pdf"
```

Place your resume at: `public/resume/Aman_Waghmare_Resume.pdf`

#### Contact Form
Update `.env.local`:
```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Get a free Formspree endpoint at [formspree.io](https://formspree.io)

#### GitHub Integration
Update `.env.local`:
```
VITE_GITHUB_USERNAME=your-github-username
```

#### Social Links
Update contact information in:
- `src/components/Navbar.jsx`
- `src/sections/Contact.jsx`
- `src/components/Footer.jsx`

### Customize Projects

Edit `/src/data/projects.js`:
```javascript
export const projects = [
  {
    id: 1,
    title: 'Project Title',
    category: 'Category',
    shortDescription: 'Brief description',
    technologies: ['React', 'Python'],
    description: {
      overview: '...',
      problem: '...',
      objective: '...',
      dataset: '...',
      technologies: [...],
      methodology: [...],
      results: {...}
    },
    github: 'https://github.com/your-username/project',
    demo: 'https://project-demo.vercel.app',
    image: '/projects/project-name.jpg',
    featured: true,
    highlights: [...]
  }
]
```

### Theme Customization

Edit `/tailwind.config.js` to customize:
```javascript
colors: {
  primary: '#0EA5E9',      // Main accent color
  secondary: '#06B6D4',    // Secondary accent
  dark: {
    900: '#0F172A',        // Background
    800: '#1E293B',        // Surface
    700: '#334155'         // Borders
  }
}
```

## 📁 Project Structure

```
├── public/
│   ├── resume/
│   │   └── Aman_Waghmare_Resume.pdf
│   └── projects/
│       ├── ecommerce-dashboard.jpg
│       └── ...
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   └── DataSphere.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectModal.jsx
│   │   └── RecruiterMode.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: #0EA5E9 (Electric Blue)
- **Secondary**: #06B6D4 (Cyan)
- **Dark BG**: #0F172A (Near Black)
- **Surface**: #1E293B (Dark Navy)
- **Text**: #E2E8F0 (Light Gray)

### Typography
- **Font Family**: Inter
- **Sizes**: 
  - H1: 4.5rem (hero), 3rem (section title)
  - H2: 2rem, H3: 1.5rem
  - Body: 1rem, Small: 0.875rem

### Spacing
- **Base**: 4px
- **Sections**: 5rem (80px)
- **Gaps**: 1rem, 1.5rem, 2rem

## 🚀 Performance Tips

### Optimizations Included
- ✅ Lazy loading of 3D components
- ✅ Code splitting for sections
- ✅ Optimized images
- ✅ Reduced motion support
- ✅ CSS animations optimization
- ✅ Preload critical resources

### Further Optimization
```bash
# Check build size
npm run build -- --analyze

# Monitor performance
# Use Chrome DevTools Lighthouse
# Target: >90 Performance score
```

## ♿ Accessibility

### Features
- ✅ Semantic HTML
- ✅ Keyboard navigation
- ✅ ARIA labels
- ✅ Focus indicators
- ✅ Color contrast (WCAG AA)
- ✅ Prefers-reduced-motion support

### Testing
```bash
# Test with keyboard only
# Test with screen reader (NVDA, JAWS)
# Use Chrome DevTools Lighthouse Accessibility audit
```

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## 🔐 Security

- ✅ No hardcoded secrets
- ✅ Environment variables for sensitive data
- ✅ No client-side API keys
- ✅ CORS properly configured
- ✅ Form submission via Formspree (secure)

## 📊 SEO

Optimized for search engines:
- ✅ Meta tags (title, description)
- ✅ Open Graph tags
- ✅ Semantic HTML
- ✅ Sitemap-ready structure
- ✅ Mobile-friendly
- ✅ Fast loading

## 🤝 Contributing

This is a personal portfolio, but feel free to:
1. Fork the repository
2. Create your own version
3. Customize for your needs
4. Deploy to Vercel

## 📄 License

MIT License - Feel free to use this as a template for your own portfolio.

## 💡 Tips for Best Results

1. **Add Project Images** - Replace placeholder gradients with actual project screenshots
2. **Update Content** - Personalize all text and links
3. **Enable Contact Form** - Set up Formspree for working contact form
4. **Add Resume** - Place your PDF in `public/resume/`
5. **Monitor Analytics** - Add Google Analytics or Vercel Analytics
6. **Test Across Devices** - Test on actual mobile devices
7. **Optimize Images** - Compress and optimize project images
8. **Custom Domain** - Connect a custom domain in Vercel

## 🚨 Troubleshooting

### 3D Not Rendering
- Check browser console for WebGL errors
- Ensure GPU acceleration is enabled
- Try a different browser
- Mobile devices may need performance optimization

### Form Not Submitting
- Verify Formspree endpoint in `.env.local`
- Check email in Formspree dashboard
- Ensure CORS is enabled
- Check browser console for errors

### Build Errors
```bash
# Clear dependencies
rm -rf node_modules
npm install

# Clear build cache
rm -rf dist
npm run build
```

## 📞 Support

For issues or questions:
- GitHub Issues: [Create an issue](https://github.com/aman-2022/portfolio/issues)
- Email: waghmare.aman007@gmail.com
- LinkedIn: [linkedin.com/in/aman-waghmare](https://linkedin.com/in/aman-waghmare)

## 🎉 Deployment Checklist

- [ ] Update `.env` with correct values
- [ ] Place resume in `public/resume/`
- [ ] Add project images to `public/projects/`
- [ ] Update all personal information
- [ ] Test all links and buttons
- [ ] Test form submission
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Add custom domain
- [ ] Enable analytics

---

**Built with ❤️ using React, Vite, Three.js, and Tailwind CSS**

**Portfolio Version**: 1.0.0  
**Last Updated**: 2026

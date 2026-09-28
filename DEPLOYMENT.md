# Deployment Guide

Complete guide to deploying your portfolio to production.

## Prerequisites

- GitHub account with repository
- Vercel account (free)
- Custom domain (optional)

## Step 1: Prepare Your Code

### 1.1 Update Configuration Files

**Environment Variables** (`.env.local`)
```env
VITE_GITHUB_USERNAME=aman-2022
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
VITE_RESUME_PATH=/resume/Aman_Waghmare_Resume.pdf
```

### 1.2 Add Your Resume

Place your resume PDF at:
```
public/resume/Aman_Waghmare_Resume.pdf
```

### 1.3 Add Project Images

Add project screenshots at:
```
public/projects/
├── ecommerce-dashboard.jpg
├── college-recommender.jpg
├── weather-app.jpg
└── chat-app.jpg
```

### 1.4 Update Personal Information

Edit the following files with your information:

**`src/components/Navbar.jsx`**
- Update GitHub and LinkedIn URLs

**`src/sections/Contact.jsx`**
- Update email and phone
- Update social media links

**`src/data/projects.js`**
- Update project titles, descriptions
- Update GitHub and demo links

**`src/components/Footer.jsx`**
- Update copyright year
- Update social links

### 1.5 Verify Everything Locally

```bash
npm install
npm run dev
```

Test all:
- ✅ Sections scroll correctly
- ✅ Links work
- ✅ 3D visualization renders
- ✅ Mobile responsive
- ✅ Form submission
- ✅ Resume download

### 1.6 Build & Test Production Build

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` and verify everything works.

## Step 2: Push to GitHub

### 2.1 Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 2.2 Ensure .gitignore is Correct

Your `.gitignore` should include:
```
node_modules/
.env
.env.local
dist/
```

## Step 3: Deploy to Vercel

### 3.1 Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in
3. Click "New Project"
4. Import your GitHub repository
5. Select the repository from the list

### 3.2 Configure Project

**Framework**: Select "Vite"  
**Root Directory**: Leave as default (.)  
**Build Command**: `npm run build`  
**Output Directory**: `dist`  

### 3.3 Environment Variables

Add your environment variables in Vercel:

1. Go to Project Settings > Environment Variables
2. Add:
   - `VITE_GITHUB_USERNAME` = your GitHub username
   - `VITE_FORMSPREE_ENDPOINT` = your Formspree endpoint
   - `VITE_RESUME_PATH` = `/resume/Aman_Waghmare_Resume.pdf`

### 3.4 Deploy

Click "Deploy" and wait for the build to complete.

Your site will be live at:
```
https://your-project-name.vercel.app
```

## Step 4: Add Custom Domain

### 4.1 Point Domain to Vercel

If you have a custom domain (e.g., `amanwaghmare.dev`):

**With Vercel Nameservers (Recommended):**
1. Go to Vercel Settings > Domains
2. Click "Add" and enter your domain
3. Copy the nameservers
4. Update nameservers at your domain registrar (GoDaddy, Namecheap, etc.)

**With CNAME Record:**
1. Go to Vercel Settings > Domains
2. Follow CNAME setup instructions
3. Add CNAME record at your domain registrar

### 4.2 Verify Domain

Once DNS propagates (can take up to 24 hours):
- ✅ Visit your custom domain
- ✅ Verify SSL certificate (automatic)
- ✅ Check that all links work

## Step 5: Set Up Contact Form

### 5.1 Create Formspree Account

1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email
3. Create a new form
4. Copy your form endpoint: `https://formspree.io/f/YOUR_FORM_ID`

### 5.2 Add to Environment

Update `.env.local` and Vercel environment variables:
```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

### 5.3 Test Form

1. Go to your contact section
2. Submit a test message
3. Check your email for the submission
4. Verify confirmation in Formspree dashboard

## Step 6: Monitoring & Maintenance

### 6.1 Analytics

**Vercel Analytics (Recommended):**
1. Go to Vercel Settings > Analytics
2. Enable Web Analytics
3. View at `https://vercel.com/analytics`

**Google Analytics (Optional):**
1. Get Google Analytics ID
2. Add to `index.html`

### 6.2 Performance Monitoring

Use Vercel's built-in monitoring:
- Function duration
- Request count
- Error tracking

Run Lighthouse audit regularly:
1. Open site in Chrome
2. DevTools > Lighthouse
3. Run audit
4. Target: >90 in all categories

### 6.3 Regular Updates

```bash
# Update dependencies
npm outdated
npm update

# Check for security vulnerabilities
npm audit
npm audit fix

# Commit and push
git add package.json package-lock.json
git commit -m "Update dependencies"
git push origin main
```

## Troubleshooting

### Build Fails

**Error: "Cannot find module"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Error: "Missing environment variable"**
- Check `.env.local` locally
- Add variables to Vercel Settings > Environment Variables
- Redeploy

### Website Not Loading

1. Check Vercel deployment status
2. Check browser console for errors
3. Clear cache and reload
4. Check DNS propagation at mxtoolbox.com

### Form Not Working

1. Verify Formspree endpoint in environment variables
2. Test form locally: `npm run dev`
3. Check Formspree dashboard for submissions
4. Check browser console for CORS errors

### 3D Visualization Not Rendering

1. Check WebGL support in browser
2. Check console for Three.js errors
3. Test in Chrome (best support)
4. Disable animations and try again

## Production Checklist

- [ ] All personal information updated
- [ ] Resume uploaded and downloadable
- [ ] Project images added
- [ ] All links tested and working
- [ ] Contact form working
- [ ] Mobile responsiveness verified
- [ ] Lighthouse score >90
- [ ] GitHub repository public
- [ ] Vercel deployment successful
- [ ] Custom domain added (optional)
- [ ] SSL certificate active
- [ ] Analytics configured
- [ ] SEO meta tags verified

## Maintenance Tasks

### Weekly
- Monitor Vercel analytics
- Check for form submissions

### Monthly
- Update dependencies
- Run security audit
- Check Lighthouse score
- Update content if needed

### Quarterly
- Full website audit
- Performance optimization review
- User feedback implementation

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com/docs

---

**Deployment Time**: ~5-10 minutes  
**Cost**: Free (Vercel, Formspree free tier)  
**Maintenance**: Minimal once deployed

Good luck with your portfolio! 🚀

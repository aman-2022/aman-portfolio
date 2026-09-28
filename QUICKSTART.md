# Quick Start Guide - 10 Minutes to Live

Get your premium portfolio live in 10 minutes.

## Prerequisites
- Node.js v16+
- Git
- GitHub account
- Vercel account (free)

## Timeline
- Setup: 2 minutes
- Customization: 5 minutes
- Deploy: 3 minutes
**Total: 10 minutes**

---

## ⚡ 1. Setup (2 min)

```bash
# Clone the project
git clone https://github.com/aman-2022/portfolio
cd portfolio

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` ✅

---

## ✏️ 2. Customize (5 min)

### Quick Edits (Do these first)

**1. Your Name** (1 min)
- File: `src/sections/Hero.jsx`
- Find: `<span className="gradient-text">Aman</span>`
- Replace with your name

**2. Contact Info** (1 min)
- File: `src/sections/Contact.jsx`
- Update:
  - Email: `waghmare.aman007@gmail.com` → YOUR_EMAIL
  - Phone: `+91 8624915699` → YOUR_PHONE
  - Social links (GitHub, LinkedIn)

**3. Add Resume** (1 min)
- Save your resume as: `public/resume/Your_Resume.pdf`
- Update path in `src/sections/Resume.jsx` if needed

**4. Update Projects** (2 min)
- File: `src/data/projects.js`
- Replace with your 4 projects
- Update GitHub & demo links

**Done!** Check locally: `npm run dev`

---

## 🚀 3. Deploy (3 min)

### Push to GitHub
```bash
git add .
git commit -m "Deploy portfolio"
git push -u origin main
```

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy"

**Live!** Your site is at: `https://your-project.vercel.app`

---

## 🎯 Next Steps (Optional)

### Add Custom Domain (5 min)
1. Vercel Settings → Domains
2. Add your domain (e.g., `amanwaghmare.dev`)
2. Update nameservers at your registrar

### Enable Contact Form (5 min)
1. Go to [formspree.io](https://formspree.io)
2. Create form → Copy endpoint
3. Update `.env.local`: `VITE_FORMSPREE_ENDPOINT=...`
4. Update Vercel environment variables

### Add Analytics (2 min)
1. Vercel Settings → Analytics
2. Enable Web Analytics
3. Done! View insights at `vercel.com`

---

## 📋 Complete Setup Checklist

**Initial Setup**
- [ ] Dependencies installed
- [ ] Dev server running
- [ ] No console errors

**Customization**
- [ ] Name updated
- [ ] Contact info updated
- [ ] Resume added
- [ ] Projects updated
- [ ] Mobile tested

**Deployment**
- [ ] GitHub repo created
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Site deployed and live
- [ ] Links tested

**Optional**
- [ ] Custom domain connected
- [ ] Contact form working
- [ ] Analytics enabled

---

## 🔧 Common Quick Fixes

**Project won't run?**
```bash
rm -rf node_modules
npm install
npm run dev
```

**Colors not showing?**
```bash
npm run build
npm run preview
```

**Deploy failed?**
- Check Vercel build logs
- Ensure `.env` variables are set
- Try: `npm run build` locally

**3D not showing?**
- Check browser supports WebGL
- Try different browser
- Check console for errors

---

## 📞 Support

**Stuck?**
- Check README.md for detailed info
- See CUSTOMIZATION.md for file locations
- See DEPLOYMENT.md for deployment help
- GitHub Issues for bugs

---

## 🎉 You Did It!

Your premium portfolio is live! Now:

1. ✅ Share your portfolio link
2. ✅ Add to your LinkedIn
3. ✅ Share with recruiters
4. ✅ Keep content updated

**Tip:** Update your resume and projects every few months to keep it fresh! 📈

---

**Questions?** See the main README.md for comprehensive documentation.

**Ready to deploy?** Follow the 3 steps above. You'll be live in 10 minutes! 🚀

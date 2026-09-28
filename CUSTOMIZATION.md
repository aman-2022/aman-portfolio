# Customization Guide

Easy step-by-step guide to customize the portfolio with your own information.

## Quick Start Customization

### 1. Personal Information (5 minutes)

#### Update Name & Title
**File**: `src/sections/Hero.jsx`
```javascript
// Line 38-42
<motion.h1 className="...">
  Hi, I'm <span className="gradient-text">YOUR_NAME</span>
</motion.h1>

<h2 className="...">
  YOUR_TITLE × EXPERTISE_1 × EXPERTISE_2
</h2>
```

#### Update Bio
**File**: `src/sections/About.jsx`
```javascript
// Line ~20-30
<p className="...">
  I'm a YOUR_TITLE with expertise in...
</p>
```

#### Update Contact Information
**File**: `src/sections/Contact.jsx`
```javascript
// Line ~19-38
const contactInfo = [
  {
    label: 'Email',
    value: 'YOUR_EMAIL@gmail.com',
    href: 'mailto:YOUR_EMAIL@gmail.com'
  },
  {
    label: 'Phone',
    value: '+91 XXXXXXXXXX',
    href: 'tel:+91XXXXXXXXXX'
  },
  // ... rest of contacts
]
```

**File**: `src/components/Footer.jsx`
```javascript
// Update social links and contact info
```

### 2. Skills (10 minutes)

**File**: `src/sections/Skills.jsx`

Update skill categories:
```javascript
const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'YOUR_LANGUAGE']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'YOUR_DB']
  },
  // Add more categories as needed
]
```

Add skill descriptions in the `descriptions` object:
```javascript
const descriptions = {
  'Python': 'Your description here',
  'YOUR_LANGUAGE': 'Description of your skill'
}
```

### 3. Projects (20 minutes)

**File**: `src/data/projects.js`

Update existing project or add new:
```javascript
{
  id: 1,
  title: 'Your Project Title',
  category: 'Your Category',
  shortDescription: 'One-liner about the project',
  technologies: ['React', 'Node.js'],
  description: {
    overview: 'What is this project?',
    problem: 'What problem does it solve?',
    objective: 'What was the goal?',
    dataset: 'What data was used?',
    technologies: ['React', 'Node.js'],
    methodology: [
      'Problem Definition',
      'Solution Design',
      'Implementation',
      'Testing'
    ],
    results: {
      metric1: 'value1',
      metric2: 'value2'
    }
  },
  github: 'https://github.com/username/project',
  demo: 'https://project-demo.vercel.app',
  image: '/projects/project-name.jpg',
  featured: true,
  highlights: [
    'Key achievement 1',
    'Key achievement 2'
  ]
}
```

### 4. Education (5 minutes)

**File**: `src/sections/Education.jsx`

Update education data:
```javascript
const educationData = [
  {
    title: 'Your Degree',
    institution: 'Your University',
    year: 'Year Range',
    details: [
      'Detail 1',
      'Detail 2'
    ]
  }
]
```

### 5. Resume (2 minutes)

**File**: `public/resume/`
1. Replace PDF with your resume
2. Update file name (or update path in code)

**File**: `src/sections/Resume.jsx`
```javascript
// Update download link
href="/resume/YOUR_RESUME_NAME.pdf"
```

### 6. Social Links (5 minutes)

Update in these files:
- `src/components/Navbar.jsx` - Links in navbar
- `src/sections/Contact.jsx` - Contact section
- `src/components/RecruiterMode.jsx` - Recruiter view
- `src/components/Footer.jsx` - Footer section

Replace URLs:
```javascript
// Before
https://github.com/aman-2022

// After
https://github.com/YOUR_USERNAME
```

---

## Advanced Customization

### Change Colors

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: '#YOUR_PRIMARY_COLOR',      // Main accent
  secondary: '#YOUR_SECONDARY_COLOR',  // Secondary accent
  dark: {
    900: '#BACKGROUND_COLOR',
    800: '#SURFACE_COLOR',
    700: '#BORDER_COLOR'
  }
}
```

**Color Ideas**:
- Blue: #0EA5E9
- Purple: #A855F7
- Green: #10B981
- Orange: #F97316
- Red: #EF4444

### Change Fonts

**File**: `index.html`
```html
<!-- Change Google Font -->
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

**File**: `tailwind.config.js`
```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif']
}
```

Popular fonts:
- Inter (current - clean)
- Geist (modern)
- Manrope (geometric)
- JetBrains Mono (monospace)

### Add New Section

1. Create new file in `src/sections/YourSection.jsx`
2. Add to `src/App.jsx`

Example:
```javascript
import YourSection from './sections/YourSection'

export default function App() {
  return (
    <main>
      <Hero />
      <About />
      <YourSection />  {/* Add here */}
      <Contact />
    </main>
  )
}
```

### Modify 3D Visualization

**File**: `src/components/3d/DataSphere.jsx`

```javascript
// Change colors
color="#YOUR_COLOR"

// Change particle size
size={0.002}  // Increase for larger particles

// Change rotation speed
ref.current.rotation.x -= 0.0001  // Increase for faster rotation
```

### Add Project Statistics

**File**: `src/sections/Projects.jsx`

Update the stats section:
```javascript
<div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
  <div>
    <div className="text-3xl font-bold text-primary mb-2">YOUR_STAT</div>
    <div className="text-sm text-slate-400">Stat Label</div>
  </div>
</div>
```

### Change Animation Speed

**File**: `src/index.css`

```css
@keyframes slideUp {
  '0%': { 
    transform: 'translateY(30px)',  /* Change distance */
    opacity: '0' 
  }
}
```

Or in components using Framer Motion:
```javascript
transition={{ duration: 0.8 }}  // Change duration
```

---

## Content Updates

### Update Meta Tags (SEO)

**File**: `index.html`

```html
<meta name="description" content="YOUR_DESCRIPTION" />
<meta property="og:title" content="YOUR_TITLE" />
<meta property="og:description" content="YOUR_DESCRIPTION" />
```

### Update Footer Text

**File**: `src/components/Footer.jsx`

```javascript
<p className="...">
  © {currentYear} YOUR_NAME. All rights reserved.
</p>
```

### Add Bio to About

**File**: `src/sections/About.jsx`

```javascript
<p className="text-lg text-slate-300 leading-relaxed">
  Add your bio here...
</p>
```

---

## File Reference

### Most Important Files to Customize

| File | Purpose | Edit Time |
|------|---------|-----------|
| `src/sections/Hero.jsx` | Main title & intro | 5 min |
| `src/sections/About.jsx` | About section | 5 min |
| `src/data/projects.js` | Projects list | 20 min |
| `src/sections/Skills.jsx` | Skills & technologies | 10 min |
| `src/sections/Education.jsx` | Education timeline | 5 min |
| `src/sections/Contact.jsx` | Contact info & form | 5 min |
| `public/resume/` | Resume PDF | 2 min |
| `tailwind.config.js` | Colors & fonts | 10 min |

### Quick Find & Replace

Use your editor's Find & Replace (Ctrl+H / Cmd+Shift+H):

```
Find: aman-2022
Replace: your-github-username

Find: Aman Waghmare
Replace: Your Name

Find: waghmare.aman007@gmail.com
Replace: your@email.com

Find: +91 8624915699
Replace: +91 XXXXXXXXXX
```

---

## Testing Customizations

### After Each Edit

1. **Local Testing**
```bash
npm run dev
```

2. **Visual Check**
- [ ] Text displays correctly
- [ ] Layout looks good
- [ ] Links work
- [ ] Mobile responsive

3. **Build Testing**
```bash
npm run build
npm run preview
```

4. **Before Deployment**
- [ ] No console errors
- [ ] All images load
- [ ] Form works
- [ ] Performance acceptable

---

## Common Customizations

### Add Resume Sections

**File**: `src/data/projects.js`

Create a resume data structure and integrate into Resume section.

### Add Blog Section

Create `src/sections/Blog.jsx`:
```javascript
export default function Blog() {
  return (
    <section id="blog" className="py-20 sm:py-32 bg-dark-900">
      {/* Blog content */}
    </section>
  )
}
```

### Add Testimonials

Create `src/sections/Testimonials.jsx` and add to App.jsx

### Add Download Statistics

Integrate with Vercel Analytics to track downloads and visits.

---

## Troubleshooting Customizations

### Text Not Showing
- Check spelling in text content
- Verify file is saved
- Restart dev server: `npm run dev`

### Styling Broken
- Check Tailwind classes are correct
- Ensure `tailwind.config.js` is not broken
- Rebuild: `npm run build`

### Images Not Loading
- Check image path is correct
- Verify image file exists in `public/`
- Use relative paths starting with `/`

### Colors Not Changing
- Clear browser cache (Ctrl+Shift+Delete)
- Check Tailwind config syntax
- Rebuild project

---

## Best Practices

✅ **Do**:
- Keep content up-to-date
- Test all changes locally first
- Commit changes to GitHub
- Use consistent styling
- Back up important files

❌ **Don't**:
- Edit files outside the specified sections
- Remove CSS classes
- Add heavy dependencies
- Hardcode API keys
- Upload large images (>500KB)

---

## Need Help?

Check these files for more info:
- `README.md` - General setup
- `DEPLOYMENT.md` - Deployment guide
- Components in `src/components/` - Reusable components
- Sections in `src/sections/` - Main sections

Good luck customizing! 🎨

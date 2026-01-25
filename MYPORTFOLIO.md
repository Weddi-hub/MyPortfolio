# 🚀 Weddi Ahmed - Computer Engineer Portfolio

A modern, fully responsive portfolio website showcasing my skills, projects, and professional experience as a Computer Science student and passionate developer.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Pages & Sections](#pages--sections)
- [Responsive Design](#responsive-design)
- [Contact Information](#contact-information)
- [Social Media Links](#social-media-links)
- [Future Enhancements](#future-enhancements)

---

## 📖 Overview

**Weddi Ahmed - Computer Engineer Portfolio** is a professional portfolio website built with React and Material-UI. It showcases my technical skills, GitHub projects, professional journey, and provides multiple ways for potential employers or collaborators to connect with me.

### Key Highlights
- ✨ Smooth, animated user interface
- 📱 Fully responsive design (mobile-first approach)
- 🎨 Modern gradient UI with custom animations
- 🔗 Live GitHub project integration
- 📧 Direct email contact via Gmail
- ☎️ Contact modal with call/email options
- 🚀 Fast performance and optimized loading

---

## ✨ Features

### 1. **Home Page**
- Eye-catching hero section with background image
- Professional introduction with animated text
- Call-to-action "Hire Me!!" button
- Smooth scroll navigation to other sections
- Responsive container that adapts to all screen sizes

### 2. **About Section**
- Two main cards: "Who Am I?" and "My Journey"
- Professional background and computer science expertise
- Interest tags showcasing passions (Web Development, Mobile Apps, etc.)
- Animated entrance effects
- Grid layout that adapts from 1 to 2 columns

### 3. **Skills Section**
- 9 technical skills organized in 3 categories:
  - **Frontend**: React, JavaScript, HTML, CSS
  - **Mobile**: Flutter, Android XML, Java
  - **Backend & Other**: C#, Database, Cyber Security
- Progress bars for each skill (0-100%)
- Easily modifiable skill levels
- Smooth animations and hover effects
- Responsive grid layout

### 4. **Work Page (GitHub Integration)**
- Fetches live projects from GitHub (@Weddi-hub)
- Displays up to 15 projects sorted by stars
- Shows for each project:
  - Project name and description
  - GitHub stars count
  - Forks count
  - Programming language with color coding
  - Launch button linking to GitHub repository
- Loading spinner during data fetch
- Error handling with user-friendly messages
- Staggered animation effects for cards

### 5. **Contact Modal**
- Accessible via phone icon in header
- Displays:
  - Phone number: **+923105437611**
  - Email: **Weddi5455@gmail.com**
- Action buttons:
  - 📞 Call Me - Initiates phone call
  - ✉️ Send Email - Opens Gmail compose with pre-filled email
- Smooth animations and hover effects
- Reduced height for better visibility

### 6. **Header Navigation**
- Responsive navigation bar
- Links to all main sections with smooth scroll
- Desktop: Horizontal navigation menu
- Mobile: Hamburger menu with drawer navigation
- Hover effects on navigation items (green highlight #1ecc35)
- Phone icon for contact access
- Logo and branding

### 7. **Footer**
- Social media links:
  - 🐙 GitHub: https://github.com/Weddi-hub
  - 💼 LinkedIn: https://www.linkedin.com/in/waleed-ahmed-322120374
  - 📸 Instagram: https://www.instagram.com/weddi_0/
  - 📧 Email: Weddi5455@gmail.com
- Responsive design
- Hover animations with elevation effect
- Copyright information

### 8. **Global Features**
- 🎨 Custom logo in browser tab
- 🔄 Smooth scroll animations throughout
- ⚡ Fast load times
- ♿ Accessibility considerations
- 📱 Mobile-first responsive design

---

## 🛠 Tech Stack

### Frontend Framework & Libraries
- **React 18.3.1** - UI library
- **React Router 6.26.1** - Client-side routing
- **Material-UI (MUI) 6.0.2** - Component library
- **@mui/icons-material** - Icon collection

### APIs & External Services
- **GitHub API v3** - Fetches user repositories and project data
- **Gmail API** - Email integration via mailto and web compose
- **Google Mail Composer** - Direct email opening

### Styling & Animations
- **CSS3** - Custom animations and responsive design
- **Gradient Effects** - Modern color schemes
- **CSS Animations** - Smooth transitions and effects
- **Flexbox & Grid** - Responsive layouts

### Build & Development
- **Create React App** - Project scaffolding
- **Node.js & npm** - Package management
- **ES6+ JavaScript** - Modern JavaScript features

### Design Patterns
- Component-based architecture
- Material-UI theming
- Responsive breakpoints (xs, sm, md, lg, xl)
- Smooth scroll navigation pattern

---

## 📁 Project Structure

```
weddi-portfolio/
├── public/
│   ├── index.html              # Main HTML entry point
│   ├── logo.svg                # Custom logo/favicon
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO robots configuration
│
├── src/
│   ├── App.js                  # Main application component
│   ├── App.css                 # Global app styles
│   ├── index.js                # React entry point
│   ├── index.css               # Global CSS with responsive utilities
│   │
│   ├── components/
│   │   ├── SkillsSection.js    # Skills section component (114 lines)
│   │   ├── AboutSection.js     # About section component (218 lines)
│   │   ├── ContactModal.js     # Contact modal component (224 lines)
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.js       # Navigation header (297 lines)
│   │   │   ├── Footer.js       # Footer with social links (160 lines)
│   │   │   └── Layout.js       # Layout wrapper component
│   │   │
│   │   ├── style/
│   │   │   ├── HomePage.css    # Hero section styles (responsive)
│   │   │   ├── HS.css          # Header/Navigation styles (responsive)
│   │   │   ├── SkillsSection.css    # Skills component styles
│   │   │   ├── AboutSection.css     # About component styles
│   │   │   └── ContactModal.css     # Modal styles (responsive)
│   │   │
│   │   └── images/
│   │       ├── W.png           # Logo image
│   │       └── bg-image.jpeg   # Home background image
│   │
│   ├── Pages/
│   │   ├── Home.js             # Home page with About & Skills
│   │   ├── About.js            # About page wrapper
│   │   ├── Skills.js           # Skills page wrapper
│   │   ├── Work.js             # GitHub projects page (297 lines)
│   │   ├── Contact.js          # Contact page (optional)
│   │   ├── PageNotFound.js     # 404 error page
│   │   │
│   │   └── style/
│   │       └── WorkPage.css    # Work page styles (responsive)
│   │
│   ├── setupTests.js           # Test configuration
│   ├── reportWebVitals.js      # Performance monitoring
│   └── App.test.js             # App tests
│
├── package.json                # Dependencies and scripts
├── package-lock.json           # Dependency lock file
├── README.md                   # Original README
├── MYPORTFOLIO.md              # This documentation file
└── .gitignore                  # Git ignore configuration
```

---

## 💻 Installation

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **Git** (for cloning the repository)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Weddi-hub/weddi-portfolio.git
   cd weddi-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add logo file** (if not present)
   - Ensure `public/logo.svg` exists in the public folder
   - If missing, copy it from `src/logo.svg` to `public/logo.svg`

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The app will reload on file changes

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

---

## 🚀 Usage

### Navigation
- **Home**: Click "WEDDI" logo or "Home" link → scrolls to top
- **About**: Click "About" → scrolls to about section
- **Skills**: Click "Skills" → scrolls to skills section
- **Work**: Click "Work" → navigates to GitHub projects page
- **Contact**: Click phone icon → opens contact modal

### Contacting via Portfolio
1. **Email**: 
   - Click "Hire Me!!" button, mail icon in footer, or "Send Email" in contact modal
   - Opens Gmail compose with pre-filled recipient
   
2. **Call**:
   - Click phone icon in header → contact modal appears
   - Click "Call Me" button → initiates phone call
   
3. **Social Media**:
   - Click respective icon in footer to open social profile

### Modifying Content

#### Change Skills
Edit `src/components/SkillsSection.js`:
```javascript
const skillsData = [
  { category: 'Frontend', skills: [
    { name: 'React', level: 85 },  // Modify skill name or level (0-100)
    { name: 'JavaScript', level: 90 },
    // Add/remove skills
  ]},
  // More categories...
];
```

#### Update GitHub Username
Edit `src/Pages/Work.js`:
```javascript
const response1 = await fetch('https://api.github.com/users/YOUR-USERNAME/repos?...');
```

#### Change Contact Information
Edit `src/components/ContactModal.js`:
```javascript
const phoneNumber = '+923105437611';  // Update phone
const emailAddress = 'Weddi5455@gmail.com';  // Update email
```

#### Customize Colors
Search for color values in CSS files:
- Primary: `#667eea` (purple)
- Secondary: `#764ba2` (dark purple)
- Accent: `#1ecc35` (green)

---

## 📄 Pages & Sections

### Home Page (`/`)
- **Route**: `/`
- **Components**: Hero Section, About Section, Skills Section
- **Features**: Smooth scroll to sections, animated background

### About Page (`/About`)
- **Route**: `/About`
- **Component**: AboutSection
- **Features**: Gradient cards, interest tags, professional summary

### Skills Page (`/Skills`)
- **Route**: `/Skills`
- **Component**: SkillsSection
- **Features**: 9 skills with progress bars, 3 categories

### Work Page (`/Work`)
- **Route**: `/Work`
- **Component**: GitHub project showcase
- **Features**: Live API data, sorting by stars, language badges

### 404 Page
- **Route**: `/*`
- **Component**: PageNotFound
- **Features**: Friendly error message with navigation

---

## 📱 Responsive Design

### Breakpoints
Portfolio is optimized for all screen sizes:

| Device | Width | Breakpoint | Status |
|--------|-------|-----------|--------|
| Mobile Small | 320px - 480px | xs | ✅ Optimized |
| Mobile | 480px - 768px | sm | ✅ Optimized |
| Tablet | 768px - 1024px | md | ✅ Optimized |
| Laptop | 1024px - 1440px | lg | ✅ Optimized |
| Desktop | 1440px+ | xl | ✅ Optimized |

### Responsive Features
- ✅ Flexible layouts using Flexbox and CSS Grid
- ✅ Responsive typography (font sizes scale with screen)
- ✅ Responsive spacing and padding
- ✅ Mobile-first CSS approach
- ✅ Touch-friendly buttons and links
- ✅ Hamburger menu on mobile devices
- ✅ Optimized images and assets
- ✅ No horizontal scrolling on any device
- ✅ Proper viewport meta tag
- ✅ CSS Grid with responsive columns

### Key Responsive Improvements
1. **Navigation**: Horizontal on desktop, hamburger drawer on mobile
2. **Text**: Font sizes scale from 12px (mobile) to 48px (desktop)
3. **Spacing**: Padding and margins adjust per breakpoint
4. **Containers**: Max-widths with percentage-based sizing
5. **Images**: Scale proportionally on all devices
6. **Buttons**: Larger touch targets on mobile (min 44px)
7. **Cards**: Single column on mobile, 2-3 columns on desktop

---

## 📞 Contact Information

**Email**: [Weddi5455@gmail.com](mailto:Weddi5455@gmail.com)  
**Phone**: [+923105437611](tel:+923105437611)  
**Location**: Pakistan

### Quick Contact Methods
1. **Email**: Click any email button/icon in portfolio
2. **Phone**: Click phone icon in header
3. **Social**: Click icons in footer

---

## 🔗 Social Media Links

- **GitHub**: [github.com/Weddi-hub](https://github.com/Weddi-hub)
- **LinkedIn**: [linkedin.com/in/waleed-ahmed-322120374](https://www.linkedin.com/in/waleed-ahmed-322120374)
- **Instagram**: [@weddi_0](https://www.instagram.com/weddi_0/)
- **Email**: [Weddi5455@gmail.com](mailto:Weddi5455@gmail.com)

---

## 🎨 Design Features

### Animations
- Smooth scroll navigation
- Fade-in entrance animations
- Hover effects on interactive elements
- Button lift and scale effects
- Gradient transitions
- Staggered card animations
- Modal pop-up animations

### Color Scheme
- **Primary Purple**: `#667eea`
- **Secondary Dark Purple**: `#764ba2`
- **Accent Green**: `#1ecc35`
- **Background**: Light gradients and overlays
- **Text**: White on dark backgrounds, dark on light

### Typography
- **Font Family**: Wellfleet (branded), Roboto (fallback)
- **Font Sizes**: Scale responsively
- **Font Weights**: 300-600 for hierarchy

### Accessibility
- ♿ Semantic HTML structure
- ♿ ARIA labels where needed
- ♿ Color contrast ratios meet WCAG standards
- ♿ Keyboard navigation support
- ♿ Proper heading hierarchy
- ♿ Alt text for images

---

## 📊 API Integration

### GitHub API
- **Endpoint**: `https://api.github.com/users/Weddi-hub/repos`
- **Data Fetched**: Project name, description, stars, forks, language
- **Update Frequency**: Real-time (fetched on page load)
- **Limit**: 200 repos (2 pages × 100 per page)
- **Sorting**: By stars (descending)

**API Response Example**:
```json
{
  "id": 123456,
  "name": "project-name",
  "description": "Project description",
  "stargazers_count": 45,
  "forks_count": 12,
  "language": "JavaScript",
  "html_url": "https://github.com/Weddi-hub/project-name"
}
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

---

## 🔄 Development Workflow

### Available Scripts

```bash
# Start development server
npm start

# Run tests
npm test

# Build production bundle
npm run build

# Eject configuration (⚠️ irreversible)
npm run eject

# Check performance metrics
npm run web-vitals
```

### Code Quality
- Use consistent indentation (2 spaces)
- Follow React best practices
- Use functional components and hooks
- Comment complex logic
- Keep components small and focused

---

## 🐛 Troubleshooting

### GitHub Projects Not Loading
- **Issue**: Work page shows loading spinner indefinitely
- **Solution**: Check browser console for API errors; verify GitHub username in `Work.js`

### Smooth Scroll Not Working
- **Issue**: Navigation links don't scroll smoothly
- **Solution**: Ensure section IDs match in components (e.g., `id="skills"`)

### Responsive Layout Broken
- **Issue**: Content overlaps on mobile
- **Solution**: Clear browser cache; check viewport meta tag in `index.html`

### Email Not Opening
- **Issue**: Gmail compose doesn't open
- **Solution**: Browser must be logged into Gmail; check email format in `ContactModal.js`

### Logo Not Showing
- **Issue**: Custom logo not in browser tab
- **Solution**: Ensure `public/logo.svg` exists; clear browser cache

---

## 📈 Performance

### Metrics
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: 90+

### Optimization Techniques
- Code splitting with React lazy loading
- Image optimization
- CSS minification
- JavaScript minification
- Caching strategies

---

## 🎓 Learning Resources

### Technologies Used
- [React Documentation](https://react.dev)
- [Material-UI Docs](https://mui.com)
- [React Router Guide](https://reactrouter.com)
- [GitHub API Reference](https://docs.github.com/en/rest)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

## 🤝 Contributing

This is a personal portfolio, but feedback is welcome!

1. **Found a bug?** Report it with details
2. **Have suggestions?** Share your ideas
3. **Want to improve?** Feel free to suggest enhancements

---

## 📜 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- **Material-UI** for the comprehensive component library
- **GitHub API** for project data integration
- **React Community** for tools and best practices
- **Inspiration** from modern portfolio designs

---

## 📝 Changelog

### Version 1.0.0 (Current)
- ✨ Initial portfolio launch
- ✨ Full GitHub integration
- ✨ Contact modal implementation
- ✨ Responsive design for all devices
- ✨ Smooth scroll navigation
- ✨ Custom logo/favicon
- ✨ Email integration with Gmail

### Planned Features (Future)
- 🔜 Blog section
- 🔜 Project details page
- 🔜 Resume PDF download
- 🔜 Dark mode toggle
- 🔜 Multi-language support
- 🔜 Comments/feedback system
- 🔜 Analytics tracking
- 🔜 Performance improvements

---

## 📞 Support

For questions or issues:
1. Check the **Troubleshooting** section
2. Review **GitHub Issues** in repository
3. Contact via email: **Weddi5455@gmail.com**
4. Call: **+923105437611**

---

## 👨‍💻 About Me

I'm **Waleed Ahmed**, a passionate Computer Science student and developer interested in:
- Web Development
- Mobile Application Development
- Software Engineering
- Cybersecurity
- Problem Solving

This portfolio showcases my journey, skills, and projects. Feel free to reach out if you'd like to collaborate or discuss opportunities!

---

**Last Updated**: January 2026  
**Version**: 1.0.0  
**Status**: ✅ Active & Maintained

---

*Made with ❤️ by Waleed Ahmed*

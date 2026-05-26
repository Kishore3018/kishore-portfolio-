# Project Architecture

Technical architecture and design decisions for your portfolio.

## 🏗️ High-Level Architecture

```
┌─────────────────────────────────────────┐
│       Next.js 15 Application            │
│      (App Router + TypeScript)          │
└─────────────────────────────────────────┘
            ↓
┌─────────────────────────────────────────┐
│       React 19 Components               │
│  - UI Components (Button, Card, Badge)  │
│  - Layout (Navbar, Footer, Container)   │
│  - Sections (8 main sections)           │
└─────────────────────────────────────────┘
            ↓
┌─────────────────────────────────────────┐
│      Styling & Animation                │
│  - Tailwind CSS (utility-first)         │
│  - Framer Motion (animations)           │
│  - Global CSS (globals.css)             │
└─────────────────────────────────────────┘
            ↓
┌─────────────────────────────────────────┐
│    Data & State Management              │
│  - Static data files (data/*.ts)        │
│  - Custom hooks (hooks/index.ts)        │
│  - Utility functions (lib/animations.ts)│
└─────────────────────────────────────────┘
```

## 📁 File Organization

### `/app` - Next.js Application
```
app/
├── layout.tsx        - Root layout with metadata & navbar/footer
├── page.tsx          - Home page (all sections)
└── globals.css       - Global styles
```

### `/components` - React Components
```
components/
├── ui/              - Reusable UI components
│   ├── Button.tsx   - Button component
│   ├── Card.tsx     - Card container
│   ├── Badge.tsx    - Badge component
│   └── index.ts     - Exports
├── layout/          - Layout components
│   ├── Navbar.tsx   - Navigation bar
│   ├── Footer.tsx   - Footer
│   └── SectionContainer.tsx - Section wrapper
└── sections/        - Page sections
    ├── HeroSection.tsx
    ├── AboutSection.tsx
    ├── SkillsSection.tsx
    ├── ProjectsSection.tsx
    ├── EducationSection.tsx
    ├── CertificationsSection.tsx
    ├── AchievementsSection.tsx
    └── ContactSection.tsx
```

### `/data` - Static Content
```
data/
├── personal.ts      - Personal info, navigation, social links
├── projects.ts      - Project information
├── skills.ts        - Technical skills by category
├── certifications.ts- Certifications
├── achievements.ts  - Achievements & milestones
└── index.ts         - Central exports
```

### `/lib` - Utilities
```
lib/
└── animations.ts    - Framer Motion variants & utilities
```

### `/hooks` - Custom React Hooks
```
hooks/
└── index.ts         - useInView, useScrollProgress, useKeyPress, useActiveSection
```

### `/types` - TypeScript Types
```
types/
└── index.ts         - Project, Skill, Certificate, Achievement types
```

### `/public` - Static Assets
```
public/
├── resume.pdf       - Your resume (add here)
├── robots.txt       - SEO robots file
└── sitemap.xml      - Sitemap
```

## 🔄 Data Flow

```
Data Files (data/*.ts)
        ↓
TypeScript Types (types/index.ts)
        ↓
React Components (components/)
        ↓
Framer Motion (lib/animations.ts)
        ↓
Tailwind CSS Styling
        ↓
Browser Display
```

## 🎨 Component Hierarchy

```
Root Layout (app/layout.tsx)
├── Navbar
├── main
│   ├── HeroSection
│   ├── AboutSection
│   ├── SkillsSection
│   │   └── Card x N
│   │       └── Badge x N
│   ├── ProjectsSection
│   │   └── Card x N
│   │       ├── Badge x N
│   │       └── Button x N
│   ├── EducationSection
│   │   └── Card
│   ├── CertificationsSection
│   │   └── Card x N
│   ├── AchievementsSection
│   │   └── Card x N
│   └── ContactSection
│       ├── Card (form)
│       └── Button
└── Footer
    ├── Social Links
    └── Contact Info
```

## 🎯 Key Design Patterns

### 1. **Composition Pattern**
Components are composed together:
- `SectionContainer` wraps sections
- `Card` wraps content
- Reusable UI components

### 2. **Data-Driven Content**
Content is separate from components:
- Edit `data/` files for content updates
- Components pull data dynamically
- Easy to maintain

### 3. **Motion Variants**
Animations are defined as reusable variants:
```tsx
variants={containerVariants}
initial="hidden"
whileInView="visible"
```

### 4. **Responsive Design**
Mobile-first approach with Tailwind:
```tsx
className="text-sm md:text-lg lg:text-xl"
```

### 5. **TypeScript Interfaces**
Strong typing for data:
```tsx
export type Project = {
  id: string;
  title: string;
  // ...
};
```

## 🔌 Technology Stack

### Framework & Language
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **React 19**: UI library

### Styling & Animation
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Framer Motion 11**: Animation library
- **PostCSS**: CSS processing

### Icons & UI
- **Lucide React**: Icon library
- **Custom Components**: Button, Card, Badge

### Build & Development
- **Node.js 18+**: Runtime
- **npm/yarn/pnpm**: Package managers
- **ESLint**: Code linting

### Deployment
- **Vercel**: Hosting platform (recommended)
- **Next.js Build**: Optimized production build

## 📊 Performance Architecture

### Code Splitting
- Automatic by Next.js
- Each section can be lazy-loaded
- Minimal initial bundle

### Image Optimization
- Next.js Image component ready
- Placeholder support
- Responsive images

### CSS Optimization
- Tailwind purges unused styles
- Minimal CSS bundle
- Custom fonts via system fonts

### Lazy Loading
- Intersection Observer hooks
- Sections load on view
- Performance optimized

## 🔒 Security Architecture

### Content Security
- No hardcoded secrets
- Environment variables ready
- Form data secure (mailto)

### Data Protection
- No external data fetching
- Static content
- No database exposure

### SSL/TLS Support
- Vercel auto HTTPS
- Works with custom domains
- Certificate auto-renewal

## 📈 SEO Architecture

### Metadata
- Dynamic meta tags in layout
- OpenGraph support
- Twitter cards

### Structured Data
- Semantic HTML
- Proper heading hierarchy
- ARIA labels

### Sitemap & Robots
- robots.txt for crawlers
- sitemap.xml for indexing
- robots.txt rules included

## ♿ Accessibility Architecture

### WCAG 2.1 AA Compliance
- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Focus management
- Color contrast compliance (7.5:1+)

### Assistive Technology
- Screen reader friendly
- Keyboard accessible
- High contrast mode support
- Reduced motion support

## 🚀 Deployment Architecture

```
Local Development
    ↓
Git Repository (GitHub)
    ↓
Vercel (Recommended)
    ├── Auto builds on push
    ├── Preview deployments
    ├── Auto SSL/HTTPS
    └── CDN distribution
    ↓
Global Availability
```

## 📊 Monitoring & Analytics

### Built-in Support
- Google Analytics ready
- Vercel Analytics capable
- Performance monitoring
- Error tracking ready

### Metrics Available
- Page views
- User interactions
- Section engagement
- Conversion tracking

## 🔄 Update Flow

```
1. Edit data files (data/*.ts)
2. Components auto-update (dev mode)
3. Preview at localhost:3000
4. Commit to Git
5. Vercel auto-deploys
6. Live update on production
```

## 🎯 Scalability Considerations

### Current State
- Static site (no backend)
- Fast loading (< 2s typical)
- Scales infinitely (CDN)

### Future Enhancements
- CMS integration (Contentful, Sanity)
- Backend API (Node.js, Python)
- Database (PostgreSQL, MongoDB)
- Real-time updates (WebSockets)

## 🔧 Build Pipeline

```
Source Code
    ↓
TypeScript Compilation
    ↓
React Component Build
    ↓
Tailwind CSS Processing
    ↓
Next.js Optimization
    ↓
Production Bundle
    ↓
Vercel Deployment
    ↓
CDN Distribution
```

## 📱 Responsive Breakpoints

```
320px - 640px     → Mobile
640px - 768px     → Tablet
768px - 1024px    → Laptop
1024px - 1280px   → Desktop
1280px+           → Large Desktop
```

## 🎨 Design System

### Color System
- 5 main colors
- Gradient combinations
- Hover states
- Focus states

### Typography Scale
- 8 heading levels
- Body text
- Small text (labels)
- Monospace (future)

### Spacing System
- 8px base unit
- Consistent throughout
- Responsive adjustments

### Component Library
- 4 reusable UI components
- 3 layout components
- 8 section components

---

## 📚 Documentation

- [README.md](README.md) - Full documentation
- [QUICK_START.md](QUICK_START.md) - 5-minute setup
- [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) - Customization
- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Deployment
- [FEATURES.md](FEATURES.md) - Feature list

---

This architecture ensures:
- ✅ **Performance**: Fast loading & smooth interactions
- ✅ **Maintainability**: Clean code & organized structure
- ✅ **Scalability**: Easy to expand with new features
- ✅ **Accessibility**: WCAG 2.1 AA compliant
- ✅ **SEO**: Optimized for search engines

# Advanced Customization Guide

In-depth guide for customizing every aspect of your portfolio.

## 🎨 Theme Customization

### Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: "#0066FF",         // Main brand color
      "primary-dark": "#0052CC",  // Darker primary
      accent: "#00D9FF",          // Accent color
      "accent-dark": "#00B8D4",   // Darker accent
      dark: "#0A0E27",            // Main background
      "dark-secondary": "#1A1F3A",// Secondary bg
      "dark-tertiary": "#252D47", // Tertiary bg
      surface: "#1F2937",         // Surface color
    },
  },
}
```

### Color Schemes

#### High Contrast
```javascript
colors: {
  primary: "#FF0000",
  accent: "#FFFF00",
  dark: "#000000",
}
```

#### Blue Theme
```javascript
colors: {
  primary: "#0066FF",
  accent: "#00D9FF",
  dark: "#0A0E27",
}
```

#### Green Theme
```javascript
colors: {
  primary: "#10B981",
  accent: "#34D399",
  dark: "#1F2937",
}
```

#### Purple Theme
```javascript
colors: {
  primary: "#8B5CF6",
  accent: "#D8B4FE",
  dark: "#2D1B4E",
}
```

## 🔤 Typography

### Change Font Family

In `app/globals.css`:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### Popular Font Combinations

```css
/* Modern Clean */
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI'; }

/* Professional */
body { font-family: 'Trebuchet MS', sans-serif; }

/* Elegant */
body { font-family: 'Georgia', serif; }

/* Monospace (Code) */
body { font-family: 'Courier New', monospace; }
```

## 📐 Spacing & Layout

### Adjust Section Padding

In `components/layout/SectionContainer.tsx`:

```tsx
className="min-h-screen w-full py-20 px-4 md:px-8 lg:px-12"
//                          ↑
//                    Change these values
```

### Change Max Width

In `components/layout/SectionContainer.tsx`:

```tsx
<div className="max-w-6xl w-full">  {/* Change max-w-6xl */}
  {children}
</div>
```

Max width options:
- `max-w-4xl` - Narrow
- `max-w-5xl` - Medium
- `max-w-6xl` - Wide
- `max-w-7xl` - Extra Wide

## 🎬 Animation Customization

### Modify Animation Duration

In `lib/animations.ts`:

```typescript
visible: {
  opacity: 1,
  transition: { duration: 0.6, ease: "easeOut" },
  //                 ↑
  //         Change duration (seconds)
}
```

### Disable Specific Animations

In component files, remove animation attributes:

```tsx
// Before - with animation
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
>

// After - static
<div>
```

### Add Custom Animation

In `tailwind.config.js`:

```javascript
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  slideUp: {
    '0%': { transform: 'translateY(30px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  // Add custom keyframe
  bounce: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  },
},
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out',
  'slide-up': 'slideUp 0.6s ease-out',
  // Add custom animation
  'bounce-custom': 'bounce 1s infinite',
}
```

## 🏗️ Component Customization

### Button Variants

In `components/ui/Button.tsx`:

```typescript
const variantStyles = {
  primary: "bg-primary hover:bg-primary-dark text-white",
  secondary: "bg-dark-tertiary hover:bg-dark-secondary",
  outline: "border-2 border-primary text-primary",
  // Add custom variant
  gradient: "bg-gradient-to-r from-primary to-accent text-white",
};
```

### Card Styling

In `components/ui/Card.tsx`:

```typescript
className={`
  bg-dark-secondary/50 border border-dark-tertiary/50
  rounded-xl p-6
  // Customize above
  ${hover ? "hover-lift" : ""}
  ${className}
`}
```

## 📱 Responsive Design Customization

### Breakpoints

Tailwind default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Use in classes:
```tsx
className="text-sm md:text-lg lg:text-xl"
```

### Custom Breakpoints

In `tailwind.config.js`:

```javascript
screens: {
  'xs': '320px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
}
```

## 🖼️ Project Showcase Customization

### Change Project Card Layout

In `components/sections/ProjectsSection.tsx`:

Change from 2-column to 1-column:

```tsx
{/* Before */}
className={`grid md:grid-cols-2 gap-8 items-center`}

{/* After */}
className={`grid gap-8 items-center`}
```

### Modify Project Features Display

```tsx
{project.features.slice(0, 3).map((feature) => (
  // Change slice(0, 3) to show more/fewer features
))}
```

## 🎯 Hero Section Customization

### Change Hero Height

In `components/sections/HeroSection.tsx`:

```tsx
<section className="min-h-screen">
  {/* Change min-h-screen to:
      h-screen (exact viewport height)
      h-auto (content height)
      min-h-[600px] (custom minimum)
  */}
</section>
```

### Modify Hero Text

Edit hero section component to change layout:

```tsx
<div className="grid md:grid-cols-2 gap-12 items-center">
  {/* Change grid-cols-2 to grid-cols-1 for single column */}
</div>
```

## 🗂️ Data Structure Modification

### Add New Skill Category

In `data/skills.ts`:

```typescript
{
  name: "New Category",
  skills: [
    { name: "Skill 1", icon: "📚", level: 85 },
    { name: "Skill 2", icon: "🎨", level: 80 },
  ],
}
```

### Add New Section

1. Create new component in `components/sections/`
2. Add import in `app/page.tsx`
3. Add section ID to navigation in `data/personal.ts`

Example:

```tsx
// components/sections/NewSection.tsx
export const NewSection = () => {
  return (
    <SectionContainer id="newsection">
      {/* Your content */}
    </SectionContainer>
  );
};
```

## 🔗 Navigation Customization

### Add New Navigation Item

In `data/personal.ts`:

```typescript
export const navigation = [
  { name: "About", href: "#about" },
  // Add new
  { name: "Blog", href: "#blog" },
];
```

### Change Navbar Background

In `components/layout/Navbar.tsx`:

```tsx
className={`
  ${isScrolled
    ? "bg-dark-secondary/95"  // Change this
    : "bg-transparent"
  }
`}
```

## 🎞️ Section Transitions

### Add Page Transition

Create `components/PageTransition.tsx`:

```tsx
import { motion } from "framer-motion";

export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
```

Use in `app/page.tsx`:

```tsx
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      {/* All sections */}
    </PageTransition>
  );
}
```

## 📊 Data Visualization

### Add Charts/Graphs

Install Recharts:

```bash
npm install recharts
```

Create component:

```tsx
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
];

export const ChartComponent = () => (
  <BarChart width={400} height={300} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Bar dataKey="value" fill="#0066FF" />
  </BarChart>
);
```

## 🔄 Performance Optimization

### Image Optimization

Replace image references with optimized versions:

```tsx
import Image from "next/image";

<Image
  src="/project.jpg"
  alt="Project"
  width={800}
  height={600}
  priority // For above-fold images
/>
```

### Code Splitting

Lazy load sections:

```tsx
import dynamic from "next/dynamic";

const ProjectsSection = dynamic(
  () => import("@/components/sections/ProjectsSection"),
  { loading: () => <p>Loading...</p> }
);
```

## 🧪 Testing Your Customizations

1. **Visual Testing**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   ```

2. **Responsive Testing**
   - DevTools → F12 → Toggle device toolbar
   - Test on different screen sizes

3. **Performance Testing**
   ```bash
   npm run build
   npm start
   # Check Lighthouse scores
   ```

4. **Type Checking**
   ```bash
   npm run type-check
   ```

---

**Happy customizing! Experiment and make it your own! 🎨**

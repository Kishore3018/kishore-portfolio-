# Quick Start Guide

Get your Kishore S portfolio up and running in 5 minutes!

## 📦 Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit http://localhost:3000 - Your portfolio is live! 🎉

## ⚙️ Quick Customization (5 mins)

### 1. Update Your Name & Details
Edit `data/personal.ts`:
```typescript
export const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  phone: "+91 XXXXXXXXXX",
  location: "Your City, Country",
};
```

### 2. Add Your Resume
1. Place your resume in `public/resume.pdf`
2. The download button will work immediately!

### 3. Update Projects
Edit `data/projects.ts` - Replace example projects with yours

### 4. Customize Skills
Edit `data/skills.ts` - Update tech stack and proficiency levels

### 5. Update Social Links
Edit `data/personal.ts` - Add your GitHub, LinkedIn URLs

## 🎨 Customize Theme (Optional)

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: "#0066FF",      // Your brand color
  accent: "#00D9FF",       // Your accent color
  dark: "#0a0e27",         // Background color
}
```

## 🚀 Deploy in 5 Minutes

### Deploy to Vercel (Free & Best)

```bash
npm install -g vercel
vercel
```

Follow the prompts - Done! 🎉

### Or Deploy to Netlify
- Go to netlify.com
- Drag & drop the `.next` folder
- Get a live URL instantly

## 📝 File Structure Quick Reference

```
📦 Portfolio
├── 📁 app/           → Main app files
├── 📁 components/    → React components
├── 📁 data/          → Your content (Edit this!)
├── 📁 public/        → Resume, images
└── 📄 README.md      → Full documentation
```

## 🎯 Next Steps

1. ✅ Update your info in `data/personal.ts`
2. ✅ Add projects in `data/projects.ts`
3. ✅ Upload resume to `public/`
4. ✅ Run `npm run dev` and preview
5. ✅ Deploy to Vercel with `vercel`

## 🆘 Common Issues

### Page doesn't load
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

### Resume download doesn't work
- Check resume is at `public/resume.pdf`
- Restart dev server

### Styles look wrong
- Make sure Tailwind CSS is compiled
- Try `npm run dev` again

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)

## 💬 Need Help?

1. Check the [README.md](README.md) for detailed docs
2. Review [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for deployment help
3. Check component code comments for implementation details

---

**Your portfolio is ready to impress recruiters! 🚀**

Now go update your content and deploy! 🎉

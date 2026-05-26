# Resume Setup Instructions

## 📄 Adding Your Resume

Your portfolio includes a resume download button. Here's how to set it up:

### Step 1: Prepare Your Resume
- Create/export your resume as **PDF format**
- Name it: `resume.pdf`
- Recommended: Keep under 200KB for fast loading

### Step 2: Upload to Public Folder
1. Navigate to the `public/` folder in your project
2. Place your `resume.pdf` file there

Your folder should look like:
```
public/
├── robots.txt
├── sitemap.xml
└── resume.pdf  ← Your resume here!
```

### Step 3: Verify It Works
1. Start dev server: `npm run dev`
2. Click the "Resume" button in navbar or "Download Resume" in contact section
3. Your PDF should download!

## 🔗 Resume Link Reference

The resume is referenced in `data/personal.ts`:

```typescript
export const personalInfo = {
  // ... other fields
  resume: "/resume.pdf",  // This path is correct!
};
```

**No changes needed** - it will work automatically once you add the file!

## 🎯 Resume Best Practices

### Content Tips
- ✅ **ATS-Friendly**: Use simple fonts and clear formatting
- ✅ **One Page**: Keep it concise for quick review
- ✅ **Keywords**: Include relevant tech keywords
- ✅ **Metrics**: Quantify achievements
- ✅ **No Photos**: Unless industry-specific

### PDF Settings
- Use PDF/A format for best compatibility
- Embed all fonts to prevent rendering issues
- Set margins to at least 0.5 inches
- Use clear, readable font (11-12pt)

### What to Include
1. **Contact Information**
   - Name, email, phone, LinkedIn
   - GitHub profile

2. **Professional Summary**
   - 2-3 lines highlighting skills

3. **Technical Skills**
   - Organized by category
   - Include proficiency levels

4. **Experience/Projects**
   - Use bullet points
   - Start with action verbs
   - Quantify results

5. **Education**
   - Degree, institution, graduation date
   - GPA (if above 3.5)
   - Relevant coursework

6. **Certifications**
   - Issuer and date

## 📱 Mobile Considerations

Resume downloads work on all devices:
- Desktop: Full PDF download
- Mobile: Opens in browser or downloads to device
- Tablet: Optimized view

## 🔄 Updating Your Resume

1. Create new PDF version
2. Replace `resume.pdf` in `public/` folder
3. No code changes needed - update is instant!

## 🆘 Troubleshooting

### Resume Download Doesn't Work

**Check:**
1. File is named exactly `resume.pdf` (case-sensitive on Linux/Mac)
2. File is in the `public/` folder
3. Dev server is restarted

**Fix:**
```bash
# Restart dev server
npm run dev
```

### File Size Too Large

**Solution:**
1. Compress PDF using online tools
2. Remove images if possible
3. Target: Under 200KB

**Compression Tools:**
- [ilovepdf.com/compress-pdf](https://www.ilovepdf.com/compress-pdf)
- [smallpdf.com](https://smallpdf.com)

### PDF Looks Weird

**Verify:**
1. PDF opens correctly on your computer
2. All fonts are embedded
3. Try exporting from different app

**Re-export Tips:**
- From Google Docs: File → Download → PDF
- From Microsoft Word: File → Export as PDF
- From Mac: File → Print → Save as PDF

## 🌐 After Deployment

Once deployed (Vercel, Netlify, etc.):

1. Resume will be at: `https://your-domain.com/resume.pdf`
2. Test the download link
3. Share the direct link with recruiters

### Direct Link Example:
```
https://your-portfolio-domain.com/resume.pdf
```

## ✅ Verification Checklist

- [ ] `resume.pdf` exists in `public/` folder
- [ ] File size is reasonable (under 200KB)
- [ ] Download button works locally
- [ ] PDF opens correctly when downloaded
- [ ] Tested on mobile device
- [ ] After deployment, tested live link

---

**Once set up, the resume feature requires zero maintenance!** 🎉

Your portfolio is now complete with a professional resume download option.

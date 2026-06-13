# Arfa Nasir's Stunning Portfolio Website

A modern, animated portfolio website built with **Next.js**, **React**, **Tailwind CSS**, and **Framer Motion**. Designed to impress tech companies and recruiters with smooth animations, interactive project cards, and a professional dark theme.

## 🌟 Features

*  **Stunning Dark Theme** - Modern, tech-forward design with cyan and purple accents
*  **Smooth Animations** - Framer Motion animations on scroll and interaction
*  **Fully Responsive** - Perfect on mobile, tablet, and desktop
* **Fast Performance** - Optimized Next.js 16 with static export
* **Interactive Elements** - Hover effects, smooth transitions, micro-interactions
* **8 Featured Projects** - Showcasing AI/ML, Distributed Systems, and Big Data expertise
* **Skills Showcase** - 8 skill categories with technology tags
* **Contact Form** - Functional contact section with form validation
* **Sticky Navigation** - Auto-highlighting nav based on scroll position
* **SEO Optimized** - Proper metadata, structured data, and keywords

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with custom theme tokens
- **Animations**: Framer Motion 12.x
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Geist (system fonts)
- **Deployment**: GitHub Pages (Static Export)

## 📂 Project Structure

```
├── app/
│   ├── globals.css           # Theme, animations, utilities
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Main portfolio page
│   └── favicon.ico
├── components/
│   ├── Navigation.tsx        # Sticky nav with scroll-spy
│   ├── Hero.tsx              # Hero section with animations
│   ├── About.tsx             # About me with expertise boxes
│   ├── Projects.tsx          # Featured projects section
│   ├── ProjectCard.tsx       # Individual project card
│   ├── Skills.tsx            # Skills grid with categories
│   ├── Experience.tsx        # Work experience & education
│   ├── Contact.tsx           # Contact form & links
│   └── Footer.tsx            # Footer with links
├── public/
│   ├── icon.svg              # Site icon
│   ├── icon-light-32x32.png
│   ├── icon-dark-32x32.png
│   └── apple-icon.png
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies
├── DEPLOYMENT_GUIDE.md       # GitHub Pages deployment guide
├── PERSONALIZATION_GUIDE.md  # Customization instructions
└── README.md                 # This file
```

## 🏃 Getting Started

### Prerequisites
- Node.js 18+ or higher
- pnpm (recommended) or npm

### Installation

1. **Clone or download the project**
```bash
git clone https://github.com/YOUR_USERNAME/arfa-nasir-portfolio.git
cd arfa-nasir-portfolio
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Run development server**
```bash
pnpm dev
# or
npm run dev
```

4. **Open in browser**
Visit `http://localhost:3000`

## 🛠️ Development

### Make Changes

Edit any component in the `components/` folder:

```bash
# Example: Edit hero section
vim components/Hero.tsx
```

Changes hot-reload automatically! No need to restart the dev server.

### Build for Production

```bash
pnpm build
# or
npm run build
```

## 📊 Portfolio Sections

### 1. Hero Section
<img width="782" height="461" alt="image" src="https://github.com/user-attachments/assets/d928ca7b-256d-465e-ab2d-5299ee7fd2b7" />

  
### 2. About Me
<img width="736" height="469" alt="image" src="https://github.com/user-attachments/assets/2d55ef9b-b933-47ad-8362-62995c32b6e6" />


### 3. Featured Projects
<img width="637" height="470" alt="image" src="https://github.com/user-attachments/assets/f9ffbd0c-0ea0-48a7-879a-5c06436c3d9a" />
<img width="498" height="471" alt="image" src="https://github.com/user-attachments/assets/d53f7678-02c1-4c1d-baef-41e37d02db2a" />


### 4. Skills & Expertise
<img width="823" height="792" alt="image" src="https://github.com/user-attachments/assets/0d117c39-dbd7-445e-8e35-5f5a71c78567" />

### 5. Experience & Education
<img width="836" height="625" alt="image" src="https://github.com/user-attachments/assets/78fe3466-e115-4c1b-bb48-88bca663fe5d" />


### 6. Contact Section
<img width="1137" height="887" alt="image" src="https://github.com/user-attachments/assets/1a947786-1fd8-4826-92e9-50d99c265726" />


## 📱 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Dark mode enabled by default

## 🐛 Troubleshooting

### Dev server won't start
```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
pnpm dev
```

### Styling looks broken
- Clear browser cache (Ctrl+Shift+Del)
- Hard refresh (Ctrl+Shift+R)
- Check that Tailwind CSS is building properly

### Animations not smooth
- Check browser hardware acceleration is enabled
- Update Framer Motion: `pnpm update framer-motion`
- Profile in DevTools Performance tab


**Made with ❤️ and smooth animations** ✨



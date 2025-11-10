# MagiqAI Landing Page

A production-ready, responsive landing page built with Next.js 14 (App Router) and Tailwind CSS.

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles & Tailwind utilities
├── components/
│   ├── Navigation.tsx     # Navbar with mobile hamburger menu
│   ├── Hero.tsx           # Hero section with CTAs
│   ├── Features.tsx       # Feature grid with icons
│   ├── Screenshots.tsx    # Product screenshots/cards
│   ├── Testimonials.tsx   # Customer testimonials
│   ├── FAQ.tsx            # Accordion FAQ section
│   ├── PricingCTA.tsx     # Pricing CTA strip
│   └── Footer.tsx         # Footer with links
├── data/
│   └── content.ts         # Content schema and data
├── public/
│   └── images/            # Image assets (logos, screenshots)
└── tailwind.config.ts     # Tailwind theme customization
```

## 🎨 Customization

### Content

Edit `data/content.ts` to update all text content, links, and metadata:

```typescript
export const siteContent: ContentData = {
  meta: {
    title: "Your Title",
    description: "Your Description"
  },
  hero: {
    headline: "Your Headline",
    // ...
  }
  // ...
}
```

### Colors & Theme

Edit `tailwind.config.ts` to customize the color palette:

```typescript
theme: {
  extend: {
    colors: {
      primary: { /* your primary color scale */ },
      accent: { /* your accent color scale */ }
    }
  }
}
```

The landing page uses two main color families:
- **Primary**: Main brand color (default: blue)
- **Accent**: Secondary accent color (default: purple)

### Typography

Update the font in `app/layout.tsx`:

```typescript
import { Inter, YourFont } from 'next/font/google'
```

### Images & Logos

1. Place your logo in `public/images/logo.png`
2. Update `components/Navigation.tsx` and `components/Footer.tsx` to use your logo
3. Add product screenshots to `public/images/` folder
4. Update the `image` paths in `data/content.ts`

Example:
```typescript
screenshots: {
  items: [
    {
      image: "/images/dashboard-screenshot.png",
      title: "Dashboard",
      // ...
    }
  ]
}
```

## 🎯 Features

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Hamburger menu for mobile navigation

### Accessibility
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text placeholders for images

### Performance
- Next.js App Router for optimal performance
- Framer Motion for smooth animations
- Tailwind CSS for minimal CSS bundle
- next/image ready for optimized images

### Animations
- Scroll-triggered entrance animations
- Hover states on cards and buttons
- Smooth transitions throughout
- Mobile menu slide animation

## 📝 Sections Included

1. **Navigation**: Fixed navbar with mobile menu
2. **Hero**: Headline, subheadline, and primary/secondary CTAs
3. **Features**: 6-item feature grid with icons
4. **Screenshots**: Product showcase with category tags
5. **Testimonials**: Customer quotes with author info
6. **FAQ**: Accordion-style frequently asked questions
7. **Pricing CTA**: Call-to-action strip with trust indicators
8. **Footer**: Multi-column links and social media icons

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Language**: TypeScript 5
- **Font**: Inter (Google Fonts)

## 📋 TODO: Replace Placeholder Content

Before going to production, update these items:

- [ ] Replace logo placeholder in `Navigation.tsx` and `Footer.tsx`
- [ ] Add real screenshot images to `public/images/`
- [ ] Update content in `data/content.ts` with actual copy
- [ ] Add favicon and other meta images
- [ ] Update social media links in footer
- [ ] Configure proper image domains in `next.config.js`
- [ ] Add avatar images for testimonials (optional)
- [ ] Set up environment variables if needed

## 🎨 Design Notes

### Visual Style
- **Spacing**: Generous padding following a consistent scale
- **Rounded Corners**: `rounded-lg` (8px) for buttons, `rounded-2xl` (16px) for cards
- **Shadows**: Soft shadows on cards, enhanced on hover
- **Typography**: Clear hierarchy with bold headings and readable body text
- **Gradients**: Subtle gradients for backgrounds and CTAs

### Component Patterns
- All components accept props for easy content management
- Reusable utility classes in `globals.css` (`.btn-primary`, `.card`, etc.)
- Consistent animation timing (0.3s-0.6s)
- Hover states on all interactive elements

### Color Usage
- Primary color: Main CTAs, links, icons
- Accent color: Secondary elements, gradients
- Gray scale: Text hierarchy, borders, backgrounds

## 🚢 Deployment

This project is ready to deploy on:
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Configure build command `npm run build`
- **Any Node.js host**: Run `npm start` after building

## 📄 License

Private project. All rights reserved.

---

**Need help?** Check the [Next.js Documentation](https://nextjs.org/docs) or [Tailwind CSS Documentation](https://tailwindcss.com/docs).


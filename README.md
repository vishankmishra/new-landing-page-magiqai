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
│   ├── Navigation.tsx         # Navbar with mobile hamburger menu
│   ├── HeroRedesign.tsx       # Hero section with CTAs and country flags
│   ├── Problem.tsx            # Problem/pain points section
│   ├── Solution.tsx           # Solution/value props section
│   ├── HowItWorks.tsx         # How it works steps
│   ├── FeaturesRedesign.tsx   # Feature grid with flip cards
│   ├── UseCases.tsx           # Use cases section
│   ├── PricingRedesign.tsx    # Pricing section
│   ├── FAQMagiq.tsx           # FAQ accordion section
│   ├── TestimonialsRedesign.tsx # Testimonials (currently commented out)
│   ├── StatsShowcase.tsx      # Stats showcase (currently commented out)
│   ├── Footer.tsx             # Footer with links
│   ├── CountryFlags.tsx       # Country flag icons component
│   └── YouTubePlayer.tsx      # YouTube video player component
├── data/
│   └── content-magiq.ts       # Content schema and data
├── utils/
│   └── iconMap.tsx            # Icon mapping utility (Lucide icons)
├── public/
│   └── images/            # Image assets (logos, screenshots)
└── tailwind.config.ts     # Tailwind theme customization
```

## 🎨 Customization

### Content

Edit `data/content-magiq.ts` to update all text content, links, and metadata:

```typescript
export const magiqContent = {
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

1. Place your logo in `public/icons/icon-logo-full.svg`
2. Update `components/Navigation.tsx` and `components/Footer.tsx` to use your logo
3. Add feature videos to `public/videos/features/` folder
4. Update the `media` paths in `data/content-magiq.ts`

Example:
```typescript
features: {
  items: [
    {
      media: "/videos/features/feature-name.mp4",
      title: "Feature Name",
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
2. **Hero**: Headline, subheadline, CTAs, and country flags
3. **Problem**: Pain points section with icons
4. **Solution**: Value propositions section
5. **How It Works**: Step-by-step process
6. **Features**: 6-item feature grid with flip cards and videos
7. **Use Cases**: Use case cards with expandable details
8. **Pricing**: Credit pack pricing with feature costs
9. **FAQ**: Accordion-style frequently asked questions
10. **Footer**: Multi-column links

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Language**: TypeScript 5
- **Font**: Inter (Google Fonts)

## 📋 TODO: Replace Placeholder Content

Before going to production, update these items:

- [ ] Replace logo placeholder in `Navigation.tsx` and `Footer.tsx`
- [ ] Add feature videos to `public/videos/features/`
- [ ] Update content in `data/content-magiq.ts` with actual copy
- [ ] Add favicon and other meta images
- [ ] Download country flag SVGs to `public/flags/` (optional - CDN fallback works)
- [ ] Configure proper image domains in `next.config.js` if using external images
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


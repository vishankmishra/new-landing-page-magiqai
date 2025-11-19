# Circular Flag Icons Download Guide

## ✅ Current Setup

The component is configured to:

1. **First try local circular flag SVG files** from `/public/flags/` (if they exist)
2. **Fallback to flagcdn.com CDN** if local files don't exist

**This means circular flags will work immediately** using the CDN, and they'll be styled as circular!

## Option 1: Use CDN (Works Now) ✨

The component automatically uses **flagcdn.com** if local files aren't found. The flags are styled as circular (rounded-full) and will display immediately!

## Option 2: Download Local Circular Flag SVGs

### Best Sources for Circular Flag Icons:

#### Method A: FlagCDN (Recommended - High Quality)

**Direct Download Links:**

- 🇮🇳 India: https://flagcdn.com/in.svg → Save as `public/flags/in.svg`
- 🇸🇬 Singapore: https://flagcdn.com/sg.svg → Save as `public/flags/sg.svg`
- 🇲🇾 Malaysia: https://flagcdn.com/my.svg → Save as `public/flags/my.svg`
- 🇦🇪 UAE: https://flagcdn.com/ae.svg → Save as `public/flags/ae.svg`
- 🇺🇸 United States: https://flagcdn.com/us.svg → Save as `public/flags/us.svg`

**Steps:**

1. Create folder: `public/flags/` (if it doesn't exist)
2. Right-click each link above → "Save As" or "Save Link As"
3. Save to `public/flags/` folder with exact filename (e.g., `in.svg`)
4. Restart your dev server: `npm run dev`

#### Method B: Use Download Script

**Windows PowerShell:**

```powershell
.\scripts\download-flags.ps1
```

**Linux/Mac Bash:**

```bash
chmod +x scripts/download-flags.sh
./scripts/download-flags.sh
```

#### Method C: ProIcons Circle Flags (Premium Quality)

1. Visit: https://proicons.com/icon-collections/circle-flags-icon-pack/
2. Download the icon pack (free for personal/commercial use - MIT license)
3. Extract and find these files:
   - `in.svg` (India)
   - `sg.svg` (Singapore)
   - `my.svg` (Malaysia)
   - `ae.svg` (UAE)
   - `us.svg` (United States)
4. Copy to `public/flags/` folder

#### Method D: UXWing (Free Circular Flags)

1. Visit: https://uxwing.com/
2. Search for each country flag (e.g., "India flag round circle")
3. Download SVG format
4. Rename and save to `public/flags/` folder

### File Naming Convention

Save files in `/public/flags/` with these exact names:

```
public/flags/
├── in.svg   (India)
├── sg.svg   (Singapore)
├── my.svg   (Malaysia)
├── ae.svg   (UAE)
└── us.svg   (United States)
```

### File Structure

After downloading, your structure should look like:

```
public/
├── flags/
│   ├── in.svg
│   ├── sg.svg
│   ├── my.svg
│   ├── ae.svg
│   └── us.svg
├── images/
└── icons/
```

### After Downloading

✅ Flags will automatically use local files once they're in place
✅ No code changes needed - the component handles it automatically
✅ Flags will be displayed as circular icons
✅ Restart dev server: `npm run dev`

### Styling

The component automatically styles flags as circular with:

- `borderRadius: '50%'` (makes them circular)
- `border-2 border-gray-200` (subtle border)
- `shadow-sm` (light shadow)
- Size: 32x32px

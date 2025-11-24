import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // MagiQ Purple - Full scale based on #773DF4
        magiq: {
          50: "#f5f0ff",
          100: "#ede0ff",
          200: "#dcc5ff",
          300: "#c49eff",
          400: "#a870ff",
          500: "#8b4aff",
          600: "#773df4", // MagiQ Purple anchor
          700: "#6528d9",
          800: "#5421b3",
          900: "#461d94",
          950: "#2d1261",
        },
        // Primary color - MagiQ Purple scale
        primary: {
          50: "#f5f0ff",
          100: "#ede0ff",
          200: "#dcc5ff",
          300: "#c49eff",
          400: "#a870ff",
          500: "#8b4aff",
          600: "#773df4", // MagiQ Purple anchor
          700: "#6528d9",
          800: "#5421b3",
          900: "#461d94",
          950: "#2d1261",
        },
        // Rich Neutral - Mauve-based grays that harmonize with purple
        neutral: {
          50: "#faf9fb",
          100: "#f4f2f6",
          200: "#e8e4ed",
          300: "#d4cedb",
          400: "#b8b0c4",
          500: "#9a8fa8",
          600: "#7c6e8c",
          700: "#635770",
          800: "#514759",
          900: "#433c4a",
          950: "#2a252f",
        },
        accent: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        success: {
          500: "#10b981",
          600: "#059669",
        },
        // Perspective.co specific colors (kept for backward compatibility)
        perspective: {
          blue: "#0071eb", // rgb(0, 113, 235)
          text: "#141414", // rgb(20, 20, 20)
          bg: "#ffffff", // rgb(255, 255, 255)
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // Rich Light Mode gradients
        "gradient-mesh":
          "linear-gradient(135deg, #ffffff 0%, #faf9ff 25%, #f5f0ff 50%, #ede0ff 75%, #e8f0ff 100%)",
        "gradient-primary":
          "linear-gradient(135deg, #773df4 0%, #8b4aff 50%, #a870ff 100%)",
        "gradient-glass":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.85) 100%)",
        // Legacy gradients (kept for backward compatibility)
        "gradient-blue": "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
        "gradient-purple": "linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)",
      },
      fontFamily: {
        sans: [
          '"Inter F"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        display: [
          '"Inter F"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        // Perspective.co typography
        hero: [
          "72px",
          { lineHeight: "79.2px", letterSpacing: "-0.72px", fontWeight: "700" },
        ],
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-down": "slide-down 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "spin-slower": "spin 15s linear infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

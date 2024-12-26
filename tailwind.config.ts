import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        "button-gradient": "linear-gradient(to right, #70D0F9, #0055E1)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryText: "#393939",
        borderColor: "#4285F4",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],

      },
      fontSize: {
        // Web variant (default)
        'heading': ['46px', '1.5'], // [font size, line height]
        // Mobile variant
        'sHeading': ['24px', '1.5'], // Smaller font size for mobile
      },
      screens: {
        sm: '640px',  // Breakpoint for small screens (mobile)
        md: '768px',  // Breakpoint for tablet
        lg: '1024px', // Breakpoint for large screens
      },
      fontWeight: {
        600: '600',

      },
      boxShadow: {
        'black': '0 0 100px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  variants: {
    fontSize: ['responsive', 'hover', 'focus'], // Enable variants
  },
  plugins: [],
} satisfies Config;

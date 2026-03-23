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
        "brand-near-white": "#1A1A1A",   // main text (dark on light bg)
        "brand-light-gray": "#F2F2F0",   // support background
        "brand-pale-blue": "#e8eef8",    // light blue tint
        "brand-muted-blue": "#1A1A1A",   // body text
        "brand-gray-body": "#a1a0a0",    // secondary text
        "brand-dark-border": "#a1a0a0",  // border color
        "brand-dark-pill": "#FFFFFF",    // pill/badge background
        "brand-dark-navy": "#013496",    // primary blue
        "brand-dark-card": "#e8e8e8",    // card hover
        "brand-page-bg": "#F2F2F0",      // page background
        "brand-card-bg": "#FFFFFF",      // card background
        "brand-body-alt": "#a1a0a0",     // tertiary text
        "brand-accent": "#013496",       // primary blue
        "brand-dark-blue": "#012070",    // primary hover
      },
      fontFamily: {
        poppins: ["Poppins", "system-ui", "sans-serif"],
        manrope: ["Manrope", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

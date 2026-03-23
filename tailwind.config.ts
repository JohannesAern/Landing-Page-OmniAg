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
        // Framer design tokens mapped to named colors
        "brand-near-white": "#f2f9fe",   // --token-43315af6
        "brand-light-gray": "#f4f6fa",   // --token-da436d05
        "brand-pale-blue": "#dee8f6",    // --token-adf7f60c
        "brand-muted-blue": "#cad4e3",   // --token-08abdfee
        "brand-gray-body": "#828e9d",    // --token-f191b7e0
        "brand-dark-border": "#3d4045",  // --token-da4073a9
        "brand-dark-pill": "#181e26",    // --token-a593d7d5
        "brand-dark-navy": "#212a40",    // --token-c049abf4
        "brand-dark-card": "#1b1f26",    // --token-7d3df988
        "brand-page-bg": "#070c14",      // --token-3854456b
        "brand-card-bg": "#14161e",      // --token-c7fa0745
        "brand-body-alt": "#485e79",     // --token-b32213de
        "brand-accent": "#1f78ff",       // --token-28d52507
        "brand-dark-blue": "#0657d0",    // --token-4734062f
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

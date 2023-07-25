/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        256: "64rem",
      },
      colors: {
        base: "rgba(var(--color-base) / <alpha-value>)",
        primary: {
          main: "rgba(var(--color-primary) / <alpha-value>)",
          hover: "rgba(var(--color-primary-hover) / <alpha-value>)",
        },
        secondary: {
          main: "rgba(var(--color-secondary) / <alpha-value>)",
          hover: "rgba(var(--color-secondary-hover) / <alpha-value>)",
        },
        border: {
          DEFAULT: "rgba(var(--color-border) / <alpha-value>)",
          hover: "rgba(var(--color-border-hover) / <alpha-value>)",
        },
        disabled: "rgba(var(--color-disabled) / <alpha-value>)",
        inactive: "rgba(var(--color-inactive) / <alpha-value>)",
        icon: {
          main: "rgba(var(--color-icon) / <alpha-value>)",
          hover: "rgba(var(--color-icon-hover) / <alpha-value>)",
        },
        text: {
          main: "rgba(var(--color-text) / <alpha-value>)",
          secondary: "rgba(var(--color-text-secondary) / <alpha-value>)",
          transparent: "rgba(var(--color-text-transparent) / <alpha-value>)",
        },
        section_g_start: "rgba(var(--color-section-g-start) / <alpha-value>)",
        section_g_end: "rgba(var(--color-section-g-end) / <alpha-value>)",
        focus_color: "rgba(var(--color-focus) / <alpha-value>)",
      },
      boxShadow: {
        "5xl": "0 0 35px 0 rgba(151, 71, 255, 0.75)",
        "5xl-m": "0 0 35px 0 rgba(151, 71, 255, 0.90)",
      },
      fontFamily: {
        primary: ["var(--font-rubik)", "sans-serif"],
        handwritten: ["var(--font-fuzzy-bubbles)", "sans-serif"],
      },
      screens: {
        "lgw-smh": { raw: "(min-width: 1024px) and (min-height: 600px)" },
        "sm-h": { raw: "(min-height: 640px)" },
        "md-h": { raw: "(min-height: 768px)" },
        "lg-h": { raw: "(min-height: 1024px)" },
        "xl-h": { raw: "(min-height: 1280px)" },
        "2xl-h": { raw: "(min-height: 1536px)" },
      },
      spacing: {
        "18p": "4.5rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

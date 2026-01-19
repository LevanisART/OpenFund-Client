/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          light: "var(--color-primary-light)",
        },
        background: {
          page: "var(--color-bg-page)",
          cream: "var(--color-bg-cream)",
          light: "var(--color-bg-light)",
          card: "var(--color-bg-card)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
          inverse: "var(--color-text-inverse)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          light: "var(--color-border-light)",
        },
      },
      fontFamily: {
        primary: ["var(--font-family-primary)"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
      },
      transitionDuration: {
        fast: "var(--transition-fast)",
        normal: "var(--transition-normal)",
      },
      maxWidth: {
        container: "var(--container-max-width)",
      },
    },
  },
  plugins: [],
};

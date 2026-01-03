/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Inter Variable'", "'Inter'", "ui-sans-serif", "system-ui"],
        body: ["'Inter Variable'", "'Inter'", "ui-sans-serif", "system-ui"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        modern: {
          "primary": "#6C5CE7",
          "secondary": "#00CEC9",
          "accent": "#FFC857",
          "neutral": "#1E1E2A",
          "base-100": "#0F172A",
          "base-200": "#111827",
          "base-300": "#1F2937",
          "info": "#76A9FA",
          "success": "#22D3EE",
          "warning": "#FBBF24",
          "error": "#F472B6",
        },
      },
      "light",
    ],
    darkTheme: "modern",
  },
  plugins: [require("daisyui")],
};

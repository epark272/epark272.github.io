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
          "primary": "#7FA4C6", // muted ink blue
          "secondary": "#C29A6B", // warm sand
          "accent": "#6FA383", // muted green
          "neutral": "#12171D", // softened charcoal
          "base-100": "#161C21", // lighter charcoal paper
          "base-200": "#1E252E", // inked dark
          "base-300": "#28323E", // outline dark
          "info": "#4D7EA8",
          "success": "#5C8A57",
          "warning": "#C28C48",
          "error": "#B35B5B",
        },
      },
      {
        light: {
          "primary": "#284866", // cool ink blue
          "secondary": "#6F5B3E", // subdued brown
          "accent": "#3E6A50", // muted green
          "neutral": "#1E2329", // charcoal text
          "base-100": "#F4F5F7", // cool paper
          "base-200": "#E7E9EC", // light gray paper
          "base-300": "#D4D7DC", // outline gray
          "info": "#2F6690",
          "success": "#356B45",
          "warning": "#B07A2A",
          "error": "#8F2F2F",
        },
      },
    ],
    darkTheme: "modern",
  },
  plugins: [require("daisyui")],
};

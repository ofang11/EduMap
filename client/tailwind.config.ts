import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        playfair: ['Playfair Display', 'Arial', 'sans-serif'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        "helvetica-neue": ['Helvetica Neue', 'Arial', 'sans-serif'],
        gurajada: ['Gurajada', 'Arial', 'sans-serif'],
        hedvig: ['Hedvig Letters Serif', 'Arial', 'sans-serif'],
        "avenir-next": ['Avenir Next', 'Arial', 'Lucida Grande', 'sans-serif']
      },
    },
  },
  plugins: [],
} satisfies Config;

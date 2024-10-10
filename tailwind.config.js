/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          brightorange: "hsl(31, 77%, 52%)",
          darkcyan: "hsl(184, 100%, 22%)",
          vdarkcyan: "hsl(179, 100%, 13%)",
        },

        neutral: {
          transwhite: "hsla(0, 0%, 100%, 0.75)",
          vlightgray: "hsl(0, 0%, 95%)",
        }
      }
    }
  },
  plugins: [],
}
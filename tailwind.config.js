/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        // Primary
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
        // Neutral
        "transparent-white": "hsla(0, 0%, 100%, 0.75)", // Paragraphs
        "very-light-gray": "hsl(0, 0%, 95%)" // Background, headings, buttons
      },
      fontFamily: {
        title: ["Big Shoulders Display", "cursive"],
        accent: ["Lexend Deca", "sans-serif"]
      }
    }
  },
  plugins: []
};

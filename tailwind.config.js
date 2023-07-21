/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        aubergine: "#4A154B",
        horchata: "#F4EDE4",
        black: "#1D1C1D",
        slackBlue: "#36C5F0",
        slackGreen: "#2EB67D",
        slackYellow: "#ECB22E",
        slackRed: "#E01E5A"
      }
    },
  },
  plugins: [],
}

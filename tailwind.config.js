/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bidv: {
          teal: "#00A6A6",
          deep: "#004B5A",
          blue: "#004B8D",
          gold: "#F3B522",
          ink: "#102033",
          mist: "#F4F8F8"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(16, 32, 51, 0.12)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      }
    }
  },
  plugins: []
};

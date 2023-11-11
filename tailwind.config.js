module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "app-background": "url('assets/images/app-background.png')",
        "white-background": "url('assets/images/white-background.svg')",
      }),
      colors: {
        primary: "#1F294D",
        secondary: "#77CBBF",
        drawer: "#3490dc",
        toggleText: "#1D7E92",
      },
    },
  },
  plugins: [],
};

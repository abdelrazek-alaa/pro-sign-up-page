module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#111214",
        sec: "#232527",
        mainBorder: "#707070",
      },
      screens: {
        xs: "368px",
      },
      backgroundImage: {
        "yacht-Img": "url('/public/images/yacht-bg.jpg')",
      },
    },
  },
  plugins: [],
};

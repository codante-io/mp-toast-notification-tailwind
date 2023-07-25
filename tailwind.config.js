module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "notification": "notification-enter 0.3s linear",
      },
      keyframes: {
        "notification-enter": {
          "0%": { transform: "translateX(18rem)", opacity: 0 },
          "100%": { transform: "translateX(0rem)", opacity: 100 },
        },
      },
    },
  },
  plugins: [],
}


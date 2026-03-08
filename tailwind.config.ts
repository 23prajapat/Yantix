export default {
  theme: {
    extend: {
      keyframes: {
        zoomInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "zoom-slow": "zoomInOut 8s ease-in-out infinite",
      },
    },
  },
};
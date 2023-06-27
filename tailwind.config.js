/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(16deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(16deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        flip: {
          "0%": { transform: "scaleX(-1)" },
          "25%": { transform: "scaleX(0)" },
          "50%": { transform: "scaleX(-1)" },
          "75%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(-1)" },
        },
        twirl: {
          "0%": { transform: "rotate(0.0deg)" },
          "25%": { transform: "rotate(180.0deg)" },
          "50%": { transform: "rotate(360.0deg)" },
          "75%": { transform: "rotate(180.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      // prettier-ignore
      animation: {
        wiggle: "wave 2s linear infinite",
        flip: "flip 1s linear infinite",
        twirl: "twirl 2s linear infinite"
      },
    },
    fontFamily: {
      sans: ["var(--font-rubik)"],
    },

    // prettier-ignore
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
  },

  plugins: [require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: ["light", "dark"], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },

  darkMode: ["class", '[data-theme="dark"]'],
};

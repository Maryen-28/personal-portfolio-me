module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(191, 60%, 32%)",
          foreground: "hsl(255, 100%, 100%)",
          hover: "hsl(191, 60%, 27%)",
        },
        secondary: {
          DEFAULT: "hsl(39, 41%, 92%)",
          foreground: "hsl(213, 14%, 15%)",
        },
        accent: {
          DEFAULT: "hsl(3, 82%, 54%)",
          foreground: "hsl(255, 100%, 100%)",
          hover: "hsl(3, 82%, 48%)",
        },
        background: "hsl(206, 14%, 90%)",
        foreground: "hsl(213, 14%, 15%)",
        info: "hsl(210, 40%, 96%)",
        success: "hsl(152, 69%, 37%)",
        warning: "hsl(38, 92%, 56%)",
        error: "hsl(0, 84%, 60%)",
        gray: {
          300: "hsl(210, 14%, 96%)",
          600: "hsl(210, 14%, 52%)",
        },
        card: {
          DEFAULT: "hsl(255, 100%, 100%)",
          foreground: "hsl(213, 14%, 15%)",
        },
        border: "hsl(210, 14%, 96%)",
        input: "hsl(210, 14%, 96%)",
        ring: "hsl(3, 82%, 54%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        body: ['"Nunito Sans"', "sans-serif"],
      },
      fontSize: {
        h1: ["60px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        h2: ["36px", { lineHeight: "1.3", fontWeight: "700" }],
        h3: ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["16px", { lineHeight: "1.5", fontWeight: "400" }],
        small: ["14px", { lineHeight: "1.4", fontWeight: "400" }],
        label: ["14px", { lineHeight: "1.5", fontWeight: "500" }],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "8px",
        md: "8px",
        sm: "4px",
      },
      maxWidth: {
        container: "1280px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, hsl(191, 60%, 32%) 0%, hsl(3, 82%, 54%) 100%)',
      },
    },
  },
  plugins: [],
}

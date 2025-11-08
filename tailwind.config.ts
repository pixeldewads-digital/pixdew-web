import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          500: '#22C55E',
        },
        sky: {
          400: '#67E8F9',
        },
        slate: {
          500: '#64748b',
          700: '#334155',
        },
        white: '#FFFFFF',
        black: '#0F172A',
        'gray-light': '#F9FAFB',
        'gray-dark': '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

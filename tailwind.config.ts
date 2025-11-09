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
          '500': '#22C55E',
          '600': '#16a34a', // Added for hover state
        },
        sky: {
          '400': '#67E8F9',
          '500': '#38bdf8', // Added for secondary button text
        },
        slate: {
            '500': '#64748b',
            '700': '#334155',
        },
        'brand-white': '#FFFFFF',
        'brand-black': '#0F172A',
        'brand-gray-light': '#F9FAFB',
        'brand-gray-dark': '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem', // Signature PixelDew look
      },
    },
  },
  plugins: [],
};
export default config;

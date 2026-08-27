import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '500px',
      md: '768px',
      lg: '1100px',
      xl: '1440px',
      '2xl': '1920px',
    },
    extend: {
      colors: {
        pjn: {
          lime: '#BDF500',
          'lime-dark': '#273500',
          olive: '#394D00',
          mint: '#0BEA99',
          'mint-dark': '#0AAE67',
          cyan: '#56C7D8',
          'cyan-dark': '#058AA4',
          black: '#000000',
          dark: '#181818',
          charcoal: '#2D3131',
          gray: '#444747',
          'gray-mid': '#747878',
          light: '#EFF1F1',
          lighter: '#FAFBFB',
          cream: '#E1DECA',
          white: '#FFFFFF',
          border: 'rgba(255, 255, 255, 0.1)',
          'border-dark': 'rgba(0, 0, 0, 0.1)',
        },
      },
      fontFamily: {
        display: ['var(--font-abc-gravity)', 'sans-serif'],
        sans: ['var(--font-acid-grotesk)', 'sans-serif'],
        serif: ['var(--font-mackinac)', 'serif'],
      },
      borderRadius: {
        pill: '9999px',
        'card-sm': '1.6rem',
        'card-md': '2.4rem',
        'card-lg': '3.2rem',
        'card-xl': '4rem',
        'card-2xl': '6.4rem',
        'card-3xl': '8rem',
      },
      maxWidth: {
        container: '132.8rem',
        'container-sm': '110.2rem',
        'container-xs': '65.2rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'bubble-fill': {
          '0%': { transform: 'translate(-100%, -25%) scale(0.2)' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

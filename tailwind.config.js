/** @type {import('tailwindcss').Config} */

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) };
const px0_500 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) };
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };
const px0_2000 = { ...Array.from(Array(2001)).map((_, i) => `${i}px`) };

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: px0_10,
      borderRadius: px0_1000,
      lineHeight: px0_100,
      fontSize: px0_200,
      minWidth: px0_1000,
      minHeight: px0_1000,
      spacing: px0_2000,
      gap: px0_2000,
      fontWeight: px0_100,
      fontSize: {
        bold78: [
          '78px',
          {
            lineHeight: '96px',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            fontFamily: 'Pretendard',
          },
        ],
        bold60: [
          '60px',
          {
            lineHeight: '72px',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            fontFamily: 'Pretendard',
          },
        ],
        bold48: [
          '48px',
          {
            lineHeight: '60px',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            fontFamily: 'Pretendard',
          },
        ],
        bold40: [
          '40px',
          {
            lineHeight: '52px',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            fontFamily: 'Pretendard',
          },
        ],
        bold32: [
          '32px',
          {
            lineHeight: '40px',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            fontFamily: 'Pretendard',
          },
        ],
        bold24: [
          '24px',
          {
            lineHeight: '32px',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            fontFamily: 'Pretendard',
          },
        ],
        bold18: [
          '18px',
          {
            lineHeight: '28px',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            fontFamily: 'Pretendard',
          },
        ],
        bold16: [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            fontFamily: 'Pretendard',
          },
        ],
        bold14: [
          '14px',
          {
            lineHeight: '24px',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            fontFamily: 'Pretendard',
          },
        ],
        bold12: [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            fontFamily: 'Pretendard',
          },
        ],
        bold10: [
          '10px',
          {
            lineHeight: '16px',
            letterSpacing: '-0.02em',
            fontWeight: '700',
            fontFamily: 'Pretendard',
          },
        ],
        regular48: [
          '48px',
          {
            lineHeight: '60px',
            letterSpacing: '-0.02em',
            fontWeight: '400',
            fontFamily: 'Pretendard',
          },
        ],
        regular32: [
          '32px',
          {
            lineHeight: '46px',
            letterSpacing: '-0.02em',
            fontWeight: '400',
            fontFamily: 'Pretendard',
          },
        ],
        regular24: [
          '24px',
          {
            lineHeight: '32px',
            letterSpacing: '-0.02em',
            fontWeight: '400',
            fontFamily: 'Pretendard',
          },
        ],
        regular18: [
          '18px',
          {
            lineHeight: '28px',
            letterSpacing: '-0.02em',
            fontWeight: '400',
            fontFamily: 'Pretendard',
          },
        ],
        eregular18: [
          '18px',
          {
            lineHeight: '28px',
            letterSpacing: '-0.02em',
            fontWeight: '400',
            fontFamily: 'Pretendard',
          },
        ],
        regular16: [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '-0.02em',
            fontWeight: '400',
            fontFamily: 'Pretendard',
          },
        ],
        regular14: [
          '14px',
          {
            lineHeight: '24px',
            letterSpacing: '-0.02em',
            fontWeight: '400',
            fontFamily: 'Pretendard',
          },
        ],
        regular12: [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '-0.02em',
            fontWeight: '400',
            fontFamily: 'Pretendard',
          },
        ],
      },
      colors: {
        primary: {
          50: '#FEFAF6',
          100: '#F9E8D8',
          200: '#FFC8A0',
          300: '#FFB178',
          400: '#FF8933',
          500: '#FF6B00',
          600: '#CC5600',
          700: '#994000',
          800: '#662B00',
          900: '#331500',
        },
        grey: {
          50: '#F8F8F8',
          100: '#EBEBE9',
          200: '#D8D8D5',
          300: '#BFBFBA',
          400: '#8B8B87',
          500: '#6E6E69',
          600: '#585854',
          700: '#42423F',
          800: '#2C2C2A',
          900: '#1D1D1B',
        },
        secondary: {
          blue: '#1B3F80',
          brown: '#614F45',
          brown_bg: '#CBC3BB',
          brown_bg_2: '#EFEDEB',
          error: '#FF0000',
          pink: '#FB69A2',
          success: '#20D698',
        },
        white: {
          solid: '#FFFFFF',
        },
      },
      fontFamily: {
        pretendard: ['Pretendard_regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        brand: {
          red: '#FF3A3A',
          blue: '#38BDF8',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

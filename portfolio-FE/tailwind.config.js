/** @type {import('tailwindcss').Config} */

export default{
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark_primary:"#00bbf9"
      },
       backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 70%,#f626af 0deg,#8228ec 72.0000010728836deg,#f626af 144.0000021457672deg,#0025ba 216.00000858306885deg, #f626af 288.0000042915344deg 2turn)',
        'text-gradient':'linear-gradient(270deg, #DF8908 10%, #B415FF 100%)',
        'dark-bg-gradient':'radial-gradient(circle,#0a2054,#000000)',
        'nav-gradient':'linear-gradient(267deg,#DA7C25 0.36%, #B923E1 102.06%)'
    },
  },
    screens:{
      'lg':{'min':'1280px'},
      'md':{'min':'1024px'},
      'sm':{'min':'640px'}
    },
  },
  plugins: [],
}

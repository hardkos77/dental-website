/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      // Ici, vous pouvez étendre votre thème Tailwind
    },
  },
  plugins: [
    // Liste des plugins Tailwind que vous souhaitez utiliser
  ],
}

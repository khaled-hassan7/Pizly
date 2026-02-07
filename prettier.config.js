/** @type {import('prettier').Config} */
export default {
  plugins: [
    'prettier-plugin-classnames',
    'prettier-plugin-tailwindcss', 
  ],
  singleQuote: true,
  printWidth: 60,
  customAttributes: ['className'],
};
const { createPreset } = require("next-docs-ui/tailwind-plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.{ts,tsx}",
    "./node_modules/next-docs-ui/dist/**/*.js",
  ],
  presets: [createPreset()],
};

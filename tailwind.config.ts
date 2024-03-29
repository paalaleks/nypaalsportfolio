import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        fail: "var(--color-fail)",
        success: "var(--color-success)",

        licorice: {
          DEFAULT: "#230903",
          100: "#070201",
          200: "#0d0301",
          300: "#140502",
          400: "#1a0702",
          500: "#230903",
          600: "#781f0a",
          700: "#cf3512",
          800: "#f06e50",
          900: "#f7b6a8",
        },
        ebony: {
          DEFAULT: "#656256",
          100: "#141411",
          200: "#292823",
          300: "#3d3b34",
          400: "#524f45",
          500: "#656256",
          600: "#898574",
          700: "#a6a397",
          800: "#c4c2ba",
          900: "#e1e0dc",
        },
        cambridge_blue: {
          DEFAULT: "#9ebc9f",
          100: "#1c291d",
          200: "#39523a",
          300: "#557b57",
          400: "#76a077",
          500: "#9ebc9f",
          600: "#b2c9b3",
          700: "#c5d7c6",
          800: "#d8e4d9",
          900: "#ecf2ec",
        },
        tan: {
          DEFAULT: "#d3b88c",
          100: "#332713",
          200: "#664e27",
          300: "#99753a",
          400: "#c09959",
          500: "#d3b88c",
          600: "#dcc6a3",
          700: "#e5d5ba",
          800: "#eee3d1",
          900: "#f6f1e8",
        },
        light_red: {
          DEFAULT: "#ff6b6c",
          100: "#480000",
          200: "#910000",
          300: "#d90000",
          400: "#ff2323",
          500: "#ff6b6c",
          600: "#ff8989",
          700: "#ffa6a6",
          800: "#ffc4c4",
          900: "#ffe1e1",
        },
        "anti-flash_white": {
          DEFAULT: "#efefef",
          100: "#303030",
          200: "#606060",
          300: "#909090",
          400: "#c0c0c0",
          500: "#efefef",
          600: "#f3f3f3",
          700: "#f6f6f6",
          800: "#f9f9f9",
          900: "#fcfcfc",
        },
        tekhelet: {
          DEFAULT: "#3d348b",
          100: "#0c0a1c",
          200: "#181437",
          300: "#241f53",
          400: "#30296e",
          500: "#3d348b",
          600: "#5044b9",
          700: "#7b72cb",
          800: "#a7a1dc",
          900: "#d3d0ee",
        },
      },
    },
  },
  plugins: [],
};
export default config;

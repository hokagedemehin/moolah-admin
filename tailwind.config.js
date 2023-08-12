/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
      },
      colors: {
        sideNavBg: "#E3FAE6",
        navActive: "#00A651",
        navInactive: "#2E3E5C",
        mainNavAciveBg: "#E3FAE6",
        mainNavTextActive: "#00A651",
        background: "#F5F5F5",
        allUsers: "#0096EA",
        webUsers: "#EA9A00",

        selectBg: "#F4F4F4",
      },
    },
  },
  plugins: [],
};

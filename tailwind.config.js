/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'text': '#0f0f0f',
                'background': '#dfdfe2',
                'primary': '#0040ff',
                'secondary': '#1f1f1f',
                'accent': '#0059ff',
                'dark': {
                    'text': '#f0f0f0',
                    'background': '#1d1d20',
                    'primary': '#0040ff',
                    'secondary': '#e0e0e0',
                    'accent': '#0059ff',
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.html"],
    theme: {
        extend: {
            maxWidth: {
                '1/3': '33%',
                '1/2': '50%',
                '2/3': '66%',
            },
            colors: {
                brand: {
                    'xx-light': '#faaefc',
                    'x-light': '#f685f4',
                    light: "#60A5FA",
                    DEFAULT: "#fc65c4",
                    dark: "#1E3A8A",
                    'x-dark': '#4B2162',
                    'xx-dark': '#250034',

                    "teal": "#0c4254",
                    'rose-bud': '#fab497',
                    'hot-pink': "#ff66c4",
                    'mandarin-pearl': '#f47558',
                    'apple-blossom': '#b24a40',
                }
            },
            fontFamily: {
                sans: ["objektiv-mk3", "sans-serif"], // ui-sans-serif
                headline: ["ff-nuvo-web-pro", "sans-serif"], // ff-nuvo-web-pro // ice-cream-standard
            },
        },
    },
    variants: { // all the following default to ['responsive']
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            colors: {
                brand: {
                    'xx-light': '#E5C8E9',
                    'x-light': '#DCA3DD',
                    light: "#60A5FA",
                    DEFAULT: "#A071C0",
                    dark: "#1E3A8A",
                    'x-dark': '#4B2162',
                    'xx-dark': '#250034',
                }
            },
            fontFamily: {
                headline: ["orpheuspro", "sans-serif"]
            },
        },
    },
    variants: { // all the following default to ['responsive']
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
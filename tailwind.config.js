/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}"
    ],
    theme: {
        extend: {
            colors: {
                'techfix-bg': '#F3F8FA',
            },
        },
    },
    plugins: [
        require("daisyui")
    ],
    daisyui: {
        themes: ["light"],
    },
}
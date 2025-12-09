import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                bodoni: ['var(--font-bodoni)'],
            },
            colors: {
                blue: {
                    "900": "#163977",
                },
                orange: {
                    "500": "#F37135",
                },
                lime: {
                    "500": "#92C03E",
                },
                trueGray: {
                    "100": "#F7F7F7",
                    "200": "#EBEBEB",
                },
               
            },
        },
        plugins: [],

    },
}
export default config;
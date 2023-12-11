/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                textHover: "#BFBFBF",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                wave: {
                    "0, 100%": {
                        transform: "skew(0deg, 0deg) scale(1.35, 1.35)",
                        filter: "saturate(100%) invert(0%)",
                    },
                    "25%": {
                        filter: "saturate(180%) invert(10%)",
                    },
                    "50%": {
                        transform: "skew(2deg, 2deg) scale(1.35, 1.35)",
                        filter: "saturate(100%) invert(0%)",
                    },
                    "75%": {
                        filter: "saturate(150%) invert(20%)",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                water: "wave 6s ease-in-out alternate infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

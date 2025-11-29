/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                sage: {
                    50: '#f6f7f6',
                    100: '#e3e7e3',
                    200: '#c7cfc7',
                    300: '#a3b0a3',
                    400: '#7d8f7d',
                    500: '#5f7360',
                    600: '#4a5a4b',
                    700: '#3c483d',
                    800: '#323a33',
                    900: '#2b312c',
                },
                beige: {
                    50: '#faf9f7',
                    100: '#f2efe9',
                    200: '#e5ddd1',
                    300: '#d4c7b3',
                    400: '#c2ad93',
                    500: '#b39679',
                    600: '#a6836d',
                    700: '#8a6b5c',
                    800: '#71594e',
                    900: '#5d4a41',
                },
                slate: {
                    50: '#f8f9fa',
                    100: '#eef0f2',
                    200: '#dde1e5',
                    300: '#c4cad1',
                    400: '#a5adb8',
                    500: '#8891a0',
                    600: '#6f7888',
                    700: '#5a6270',
                    800: '#4c525e',
                    900: '#424650',
                },
                coral: {
                    50: '#fdf6f5',
                    100: '#fbeae8',
                    200: '#f7d9d6',
                    300: '#f0bdb7',
                    400: '#e69890',
                    500: '#d87469',
                    600: '#c4564c',
                    700: '#a4443c',
                    800: '#883c36',
                    900: '#723633',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'fade-up': 'fadeUp 0.6s ease-out',
                'slide-in': 'slideIn 0.6s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'typing': 'typing 3.5s steps(40, end)',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(95, 115, 96, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(95, 115, 96, 0.8)' },
                },
                typing: {
                    '0%': { width: '0' },
                    '100%': { width: '100%' },
                },
            },
        },
    },
    plugins: [],
}

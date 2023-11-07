module.exports = {
    mode:'jit',
    purge: [
        './src/Components/**/*.{js,ts,jsx,tsx}',
        "./src/index.jsx"
    ],
    darkMode: false,
    theme: {
        extend : {}
    },
    variants: {
        extend : {}
    },
    plugins: []
}
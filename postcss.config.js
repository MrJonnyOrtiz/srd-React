export default {
   plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(import.meta.env.MODE === "production" ? { cssnano: {} } : {}), // Minify CSS only in production
   },
};

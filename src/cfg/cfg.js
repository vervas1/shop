export const cfg = {
  API: {
    HOST:
      process.env.NODE_ENV === 'production'
        ? 'https://api-online-shop.vercel.app'
        : 'http://localhost:3000',
  },
};

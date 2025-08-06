module.exports = {
  globDirectory: './',
  globPatterns: ['**/*.{html,js,css}'],
  swDest: 'sw.js',
  runtimeCaching: [{
    urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
    handler: 'CacheFirst',
    options: {
      cacheName: 'images',
    },
  }],
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://www.dongminhttpstest:8080',
      changeOrigin: true,
    }),
  );
};

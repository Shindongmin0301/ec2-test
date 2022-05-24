const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://www.dongminhttpstest.cf:8080',
      changeOrigin: true,
    }),
  );
};

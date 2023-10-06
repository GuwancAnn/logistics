const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://web.postman.co",
      changeOrigin: true,
    })
  );
};

// Rest of your server code

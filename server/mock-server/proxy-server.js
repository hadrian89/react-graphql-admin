const { createProxyMiddleware } = require('http-proxy-middleware');
const jsonServer = require('json-server');
const server = jsonServer.create();

const pathMap = {};

const proxyServerUrl = "http://localhost:3003/";
const webappUrl = "http://localhost:3000/";

server.use("", function (req, res, next) {
  createProxyMiddleware({
    target: 'http://localhost:5000',
    changeOrigin: true,
    secure: false,
    logLevel: "debug",
    preserveHeaderKeyCache: true,
    onProxyReq: proxyReq => {
      for (const prefix in pathMap) {
        if (pathMap.hasOwnProperty(prefix) && proxyReq.path.startsWith(prefix)) {
          proxyReq.path = pathMap[prefix] + proxyReq.path.substring(prefix.length);
          break
        }
        proxyReq.setHeader("origin", proxyServerUrl)
        proxyReq.setHeader("referer", proxyServerUrl)
      }
    },
    onProxyRes: proxyRes => {
      if (proxyRes.headers["set-cookie"]) {
        proxyRes.headers["set-cookie"] = proxyRes.headers["set-cookie"].map(s => {
          s
            .replace(/; domain=[^;]+/, "")
            .replace(/; secure/, "")
            .replace(/; samesite=[^;]+/, "")
        })
      }
    }
  })(req, res, next)
})

server.listen(3003, () => {
  console.log(`Proxy server running at ${proxyServerUrl}\nStart at ${webappUrl}/start.html`)
})
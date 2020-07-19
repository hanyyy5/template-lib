// const proxy = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(proxy('/users', { target: 'http://10.1.200.16:3100/' }));
// };

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/users',
        createProxyMiddleware({
            target: 'http://10.1.200.16:3100/',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '',
            }
        })
    );
    // app.use(
    //     '/apc',
    //     createProxyMiddleware({
    //         target: 'https://api.inews.qq.com/',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/apc': '',
    //         }
    //     })
    // );
};
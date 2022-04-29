const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/naverApi',
    createProxyMiddleware({
      target: 'https://image-comic.pstatic.net/webtoon/',
      changeOrigin: true,
      pathRewrite: {
        '^/naverApi': '',
      },
    }),
  ),
    app.use(
      '/kakaoApi',
      createProxyMiddleware({
        target: 'https://kr-a.kakaopagecdn.com/P/C/',
        changeOrigin: true,
        pathRewrite: {
          '^/kakaoApi': '',
        },
      }),
    ),
    app.use(
      '/pageApi',
      createProxyMiddleware({
        target: 'http://dn-img-page.kakao.com/download/resource',
        changeOrigin: true,
        pathRewrite: {
          '^/pageApi': '',
        },
      }),
    );
};

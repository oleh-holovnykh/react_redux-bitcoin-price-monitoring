import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

const app = express();

const proxyOptions = {
  target: 'https://pro-api.coinmarketcap.com',
  changeOrigin: true,
  headers: {
    'X-CMC_PRO_API_KEY': '15c7cd57-2e8c-4712-86ad-ffa687d97482',
  },
  pathRewrite: {
    '^/api': '/v2/cryptocurrency/quotes/latest',
  },
};

app.use(cors()).use('/api', createProxyMiddleware(proxyOptions));

app.listen(4000);

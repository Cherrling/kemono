// const http = require('http');

// // 代理服务器的地址和端口
// const proxyHost = '127.0.0.1';
// const proxyPort = 10809;

// // 目标服务器的地址和路径
// const targetHost = 'kemono.su';
// const targetPath = '/api/v1/patreon/user/24221339';

// // 设置代理服务器选项
// const proxyOptions = {
//   host: proxyHost,
//   port: proxyPort,
//   path: `http://${targetHost}${targetPath}`,
//   method: 'GET',
//   headers: {
//     Host: targetHost,
//   },
// };

// // 发起代理请求
// const proxyReq = http.request(proxyOptions, (proxyRes) => {
//   let data = '';

//   proxyRes.on('data', (chunk) => {
//     data += chunk;
//   });

//   proxyRes.on('end', () => {
//     // 解析JSON数据
//     const jsonData = JSON.parse(data);
//     console.log(jsonData);
//   });
// });

// proxyReq.end();
const https = require('https');

// 目标网址
const targetUrl = 'https://kemono.su/api/v1/patreon/user/24221339';

// 设置请求头部，模拟 Chrome 浏览器
const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Referer': 'https://www.google.com/', // 设置一个合理的引用页
};

// 设置请求选项
const requestOptions = {
  method: 'GET',
  headers: headers,
};

// 发起请求
const req = https.request(targetUrl, requestOptions, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });
});

req.end();

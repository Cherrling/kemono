// const axios = require('axios');
// const fs = require('fs');

// // 设置代理服务器地址和端口
// const proxyUrl = 'http://127.0.0.1:10809';

// // 文件下载地址
// const fileUrl = 'http://kemono.su/4c/a8/4ca81882000ff2927a57aea88fc18b8b79e3dd5e5025c7b3dcf1356545e0ffc3.jpg';

// // 设置代理配置
// // const axiosConfig = {
// //   httpAgent: new HttpProxyAgent(proxyUrl), // HTTP 代理
// //   httpsAgent: new HttpsProxyAgent(proxyUrl), // HTTPS 代理
// // };

// // 发起 HTTP GET 请求，使用代理
// // axios.get(fileUrl, axiosConfig)
// axios.get(fileUrl)
//   .then((response) => {
//     // 文件下载成功，将响应数据写入文件
//     const fileName = 'downloaded_image.jpg';
//     fs.writeFileSync(fileName, response.data, 'binary');
//     console.log(`文件下载成功: ${fileName}`);
//   })
//   .catch((error) => {
//     console.error('文件下载失败:', error.message);
//   });

// // 设置代理服务器地址和端口
// const proxyUrl = 'http://127.0.0.1:10809';

// // 文件下载地址
// const fileUrl = 'http://kemono.su/4c/a8/4ca81882000ff2927a57aea88fc18b8b79e3dd5e5025c7b3dcf1356545e0ffc3.jpg';

// const request = require('request');
// const fs = require('fs');
// const HttpsProxyAgent = require('https-proxy-agent');


// // 创建代理代理实例
// const proxyAgent = new HttpsProxyAgent(proxyUrl)// 使用 HTTPS 代理

// // 配置请求参数
// const requestOptions = {
//   url: fileUrl,
//   agent: proxyAgent, // 使用代理
// };

// // 发起 HTTP GET 请求，使用代理
// request(requestOptions)
//   .pipe(fs.createWriteStream('downloaded_image.jpg'))
//   .on('close', () => {
//     console.log('文件下载完成');
//   })
//   .on('error', (error) => {
//     console.error('文件下载失败:', error.message);
// //   });const fs = require('fs');
// const http = require('http');
// const https = require('https');

// // 设置代理服务器地址和端口
// const proxyUrl = 'http://127.0.0.1:10809';

// // 初始文件下载地址
// const initialFileUrl = 'http://kemono.su/4c/a8/4ca81882000ff2927a57aea88fc18b8b79e3dd5e5025c7b3dcf1356545e0ffc3.jpg';

// // 解析代理地址和端口
// const proxy = new URL(proxyUrl);

// // 配置代理选项
// const proxyOptions = {
//   host: proxy.hostname,
//   port: proxy.port,
//   path: initialFileUrl,
//   headers: {
//     Host: new URL(initialFileUrl).host,
//   },
// };

// // 选择合适的 HTTP 或 HTTPS 模块
// const httpClient = initialFileUrl.startsWith('https://') ? https : http;

// // 处理重定向
// function handleRedirect(response) {
//   if (response.statusCode === 301 || response.statusCode === 302) {
//     const newLocation = response.headers.location;
//     console.log(`重定向到: ${newLocation}`);

//     // 重新发起请求，使用代理
//     const req = httpClient.get(newLocation, proxyOptions, (res) => {
//       if (res.statusCode === 200) {
//         const fileName = 'downloaded_image.jpg';
//         const fileStream = fs.createWriteStream(fileName);

//         res.pipe(fileStream);

//         fileStream.on('finish', () => {
//           fileStream.close(() => {
//             console.log(`文件下载成功: ${fileName}`);
//           });
//         });
//       } else {
//         console.error(`文件下载失败: HTTP 状态码 ${res.statusCode}`);
//       }
//     });

//     req.on('error', (error) => {
//       console.error('文件下载失败:', error.message);
//     });
//   } else {
//     console.error(`文件下载失败: HTTP 状态码 ${response.statusCode}`);
//   }
// }

// // 发起请求，使用代理
// const req = httpClient.get(initialFileUrl, proxyOptions, handleRedirect);

// req.on('error', (error) => {
//   console.error('文件下载失败:', error.message);
// });

// req.end();

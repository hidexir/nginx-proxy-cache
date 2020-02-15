// Node.js上で動くWebサーバ

const http = require('http');

http.createServer((req, res) => {
  console.log(req.url)
  setTimeout(() => {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Cache-Control': 'max-age=10;public;must-revalidate',
    });
    res.end('Hello World\n');
  }, 1000);
}).listen(8081, () => {
  console.log('Server running at http://localhost:8081/');
});

var http = require('http');

var fs = require('fs');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // fs.readFile("testCarousel.html",function(err,data){  // 读取文件
    //     response.end(data.toString());                 // 文件数据转成字符串后写入rsp
    // });
    // 发送响应数据 "Hello World"
    // response.end('Hello World');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
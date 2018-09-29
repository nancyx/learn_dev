var http = require("http");
var express = require("express");
var fs = require("fs");

http.createServer(function(request, response){
  // 发送HTTP头部
  // HTTP状态值：200：OK
  // 内容类型：text/plain
  response.writeHead(200, {'Content-Type':'text/plain'});

  var str = ''
  str = fs.readFile("input.txt", function(err, data){
    if(err){
      return console.log(err);
    }
    else{
      console.log(data.toString());
      // 发送响应数据 "Hello World!"
      response.end(data.toString()+'Hello World!\n');
      return data.toString();
    }
  });
  console.log("The program ends.");





}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

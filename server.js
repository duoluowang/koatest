var http = require("http")
http.createServer(function(request,response){
    response.writeHead(200,{
        "Content_Type":"text/plain;charset=utf-8"
    })
    response.write("你好")
    response.end()
}).listen(3000)
console.log("服务器启动")
const http = require("http")

// access to the request
var server = http.createServer((req,res) => {


    res.setHeader('content-type','application/json')
    if(req.url ==='/user')
        res.end('welcome')
    else if(req.url ==='/hello')  
        res.end('hello world')
    console.log(req.url)
})

server.listen(3000,'127.0.0.1');



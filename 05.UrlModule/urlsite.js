const http=new require('http');
const fs=require('fs');
const url=require('url');

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.readFile("index.html",(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html"});
        res.write("<h1>Page Not Found</h1>")
        res.end();
    }
})
server.listen(3000,()=>console.log("Server is running on port 3000"));
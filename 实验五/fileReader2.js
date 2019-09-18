const http = require("http");
const fs = require("fs");
const path = require("path");
var data = process.argv[2];
if (data == undefined) {
    data = "fileReader1.js";
}
http.createServer(function (req, res) {
    var filePath = path.join(__dirname, "/" + data);
    fs.open(filePath,"r+",function(err,fd){
        if(err){
            console.log(err);
        }
        else{
            var buf=Buffer.alloc(1000);
            var len=fs.statSync(filePath).size;
            fs.read(fd,buf,0,len,0,function(err,bytesRead,buffer){
                res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                res.write(buffer.toString());
            })
        }
        fs.close(fd,function(){
            res.end();
        });
    })
    // res.end(Buffer.alloc(100).toString());
     
}).listen(8081);
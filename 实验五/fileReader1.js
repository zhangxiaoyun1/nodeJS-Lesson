const http = require("http");
const fs = require("fs");
const path = require("path");
var data = process.argv[2];
if (data == undefined) {
    data = "fileReader1.js";
}
http.createServer(function (req, res) {
    var filePath = path.join(__dirname, "/" + data);
    fs.readFile(filePath, function (err, data) {
        if(err){
            console.log(err);
            res.end();
        }
        res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
        res.write(data);
        res.end();
    });
    
}).listen(8081);


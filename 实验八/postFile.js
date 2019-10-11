const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");
var i = 1;
http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    var name = urlObj.pathname;
    var list;
    if (name == '/') {
        fs.readFile('./素材/index.html', function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        })
    } else if (name == '/upload') {
        var datastr = '';
        req.setEncoding("binary");
        req.on('data', function (chunk) {
            datastr += chunk;
        })
        req.on('end', function () {
            var name;
            var data = datastr.split('\r\n');
            var fileData = data.slice(4, data.length - 2);
            fileData = fileData.join("\r\n");
            var buf = Buffer.from(fileData, "binary");
            if (data[2].indexOf('png') || data[2].indexOf('PNG')) {
                name = `file${i++}.png`;
            } else if (data[2].indexOf('jpg') || data[2].indexOf('JPG') || data[2].indexOf('jpeg') || data[2].indexOf('JPEG')) {
                name = `file${i++}.jpg`;
            } else if (data[2].indexOf('gif') || data[2].indexOf('GIF')) {
                name = `file${i++}.gif`;
            }
            fs.writeFileSync(path.join(__dirname, '/upload/', name), buf, { "encoding": "binary" });
        })
        fs.readFile('./素材/list.html', function (err, data) {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        })
    } else if (name == '/getlist') {
        list = fs.readdirSync(path.join(__dirname, '/upload'));
        var listStr = JSON.stringify(list);
        res.end(listStr);
    } else {
        var filename = name.split('/');
        list = fs.readdirSync(path.join(__dirname, '/upload'));
        for (var i = 0; i < list.length; ++i) {
            if (list[i] == filename[2]) {
                var imgPath = path.join(__dirname, '/upload/', list[i]);
                fs.readFile(imgPath, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        if (filename[2].indexOf('png') || filename[2].indexOf('PNG')) {
                            res.writeHead(200, { "Content-Type": "image/png" });
                        } else if (filename[2].indexOf('jpg') || filename[2].indexOf('JPG') || data[2].indexOf('jpeg') || data[2].indexOf('JPEG')) {
                            res.writeHead(200, { "Content-Type": "image/jpeg" });                            
                        } else if (filename[2].indexOf('gif') || filename[2].indexOf('GIF')) {
                            res.writeHead(200, { "Content-Type": "image/gif" });                            
                        }
                        res.end(data);
                    }
                })
            }

        }

    }
}).listen(8081);
const http=require("http");
const fs=require("fs");
var server=http.createServer(function(req,res){
    var htmlPath = __dirname + "\\views\\view.html";
    var htmlContent=fs.readFileSync(htmlPath);
    htmlContent=htmlContent.toString("utf8");
    console.log(htmlContent);
    res.writeHead(200,{"Content-type":"text/html"});
    res.write(htmlContent);
    res.end();
    
});
server.listen(8080,function(){
    console.log("server is listening 8080");
});
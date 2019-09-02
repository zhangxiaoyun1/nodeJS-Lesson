const http=require("http");

var serve=http.createServer(function(req,res){
    res.write("Hello world!");
    res.end();
});

serve.listen(8080);
console.log("serve is listening 8080");
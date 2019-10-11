const http = require("http");
const querystring = require("querystring");
var username=process.argv[2];
var password=process.argv[3];
var options = {
    host: "localhost",
    port: 8081,
    path: "/",
    method: "post"
}
var infor = {username: username, password: password };
var str = querystring.stringify(infor);
var req=http.request(options,function(res){
    
});
req.write(str);
req.end();


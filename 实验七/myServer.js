const http=require("http");
const querystring = require("querystring");
const fs=require("fs");
http.createServer(function(req,res){
    var str="";
    req.on("data",function(chunk){
        str+=chunk;
    })
    req.on("end",function(){
        //var strObj=querystring.parse(str);
        fs.readFile('./data.json',function(err,data){
            var list=JSON.parse(data.toString());
            var data=querystring.parse(str);
            for(var i=0;i<list.length;i++){
                if(data.username==list[i].username&&data.password==list[i].password){
                    console.log("登录成功");
                    break;
                }else if(i==list.length-1){
                    console.log("用户名，密码错误");
                }
            }
        })
    })
}).listen(8081);
console.log("Server is listening 8081");
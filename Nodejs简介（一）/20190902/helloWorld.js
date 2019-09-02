const http=require("http");

var serve=http.createServer(function(req,res){
    res.write("Hello world!");
    res.end();
});

serve.listen(8081);
console.log("serve is listening 8081");

/* 
    打开窗口 shift+右键 打开powershell窗口
    编译JS文件， node+文件名
    每次修改了JS文件后，需要重新执行node+文件名

*/
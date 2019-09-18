const fs=require("fs");
const path=require("path");
console.log("创建文件夹：");
process.stdin.on("data",function(data){
    var cmd=data.toString();
    var cmdArr=cmd.split(" ");
    switch(cmdArr[0]){
        case "mkdir":
            fs.mkdirSync(cmdArr[1].slice(0,-2));
            console.log("文件目录创建成功");
            break;
        case "touch":
            var fileParh=path.join(__dirname,"/filedir/file.txt");
            fs.writeFileSync(fileParh,"hello world");
            console.log("文件创建成功");
            break;
        case "delete":
            var fileParh=path.join(__dirname,"/filedir/file.txt");
            fs.unlinkSync(fileParh);
            break;
        default:
            console.log("something error");
    }
})
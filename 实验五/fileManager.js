const fs=require("fs");
const path=require("path");
var arr=["请输入创建的文件夹:","请输入要创建的文件：","请输入要删除的文件"];
var arr1=[];
var i=0;
console.log(arr[i]);
process.stdin.on("data",function(data){
    if(i==0){
        arr1[i]=data.toString().slice(0, -2);
        fs.mkdirSync(path.join(__dirname,"/"+arr1[i]));
        console.log("文件目录创建成功");
        i++;
        console.log(arr[i]);
    }
    else if(i==1){
        arr1[i]=data.toString().slice(0, -2);
        fs.writeFileSync(path.join(__dirname,"/"+arr1[i-1]+"/"+arr1[i]),'hello world');
        console.log("文件创建成功");
        i++;
        console.log(arr[i]);
    }
    else{
        arr1[i]=data.toString().slice(0, -2);
        fs.unlinkSync(path.join(__dirname,"/"+arr1[i-2]+"/"+arr1[i]));
        process.exit();
    }
});
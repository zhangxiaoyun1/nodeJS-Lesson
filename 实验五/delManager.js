const fs=require("fs");
const path=require("path");
var argv=process.argv[2];
var filePath=path.join(__dirname,"/"+argv);
if(fs.statSync(filePath).isFile()){
    fs.unlinkSync(filePath);
}
else{
    deleteDir(filePath);
}
function deleteDir (filePath){
    if(fs.existsSync(filePath)){
        fs.readdirSync(filePath).forEach((file)=>{
            var filePath1 = filePath +'/'+file;
            if(fs.statSync(filePath1).isDirectory()){
                deleteDir(filePath1);
            }else{
                fs.unlinkSync(filePath1);
            }
        })
    }
    fs.rmdirSync(filePath);
}
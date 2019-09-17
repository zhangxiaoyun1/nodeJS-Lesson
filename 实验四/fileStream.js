const fs=require("fs");
const path=require("path");
var reader=path.join(__dirname,"/from.txt");
var write=path.join(__dirname,"/to.txt");
var readStream=fs.createReadStream(reader);//.toLocaleUpperCase();
var writeStream=fs.createWriteStream(write);
readStream.pipe(writeStream);
const stream=require("stream");
var reader=new stream.Readable();
function MyReadable(){
}
MyReadable.prototype.__proto__=reader;
var read=new MyReadable();
read.push("abcdefghijklmnopqrstuvwxyz");
read.push(null);
read.pipe(process.stdout);

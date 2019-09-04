console.time("test");
var time=setInterval(function(){
    console.log("I will loop forver!");
},500);
setTimeout(function(){
    clearInterval(time);
    console.log("Game over");
    process.exit();
},5000);
console.timeEnd("test");


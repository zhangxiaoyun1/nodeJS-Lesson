const events=require("events");
const util=require("util");
const EventEmitter=events.EventEmitter;

function Radio(name,FM){
    EventEmitter.call(this);
    this.name=name;
    this.FM=FM;
    var that=this;
    setTimeout(function(){      //setTimeout 不是setTimeOut
        that.emit("opened");
    },2000);
}
util.inherits(Radio,EventEmitter);
var radio=new Radio("music radio","FM 106.7");
console.log(radio.name+radio.FM+"  opened");     //this.name和this.FM指向哪里
radio.on("opened",function(){
    console.log("lalala...");
    console.log(this.name+this.FM+"  closed");
});
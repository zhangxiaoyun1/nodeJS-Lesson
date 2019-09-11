const events=require("events");
const EventEmitter=events.EventEmitter;

function Dog(name,energy){
    EventEmitter.call(this);
    this.name=name;
    this.energy=energy;
    var that=this;
    var time=setInterval(function(){
        that.emit("bark!!");
        that.energy--;
    },1000);
}
Dog.prototype.__proto__=EventEmitter.prototype;
var taidi=new Dog("taidi",4);
var zangao=new Dog("zanghao",8);
taidi.on("bark!!",function(){
    console.log(this.name+"：barked！" + " energy:" +this.energy);
    if(this.energy==0){
        clearInterval(time);
    }
});
zangao.on("bark!!",function(){
    console.log(this.name+"：barked！" + " energy:" +this.energy);
    if(this.energy==0){
        clearInterval(time);
    }
});

console.time("test");
function Bomb(){
}
Bomb.prototype.message="bomb!!!";
Bomb.prototype.explod=function(){
    console.log(this.message);
}
var bomb=new Bomb();
function loopTimer(){
    setTimeout(function(){
        bomb.explod();
    },2000);
}
loopTimer();
console.timeEnd("test");

var user={};
var i=0;
console.log("Name:");
process.stdin.on("data",function(data){
    i++;
    if(i==1){
        user.Name=data.toString();
        console.log("Email:");
    }
    if(i==2){
        user.Email=data.toString();
        console.log("QQ:");
    }
    if(i==3){
        user.QQ=data.toString();
        console.log("Mobile:");
    }
    if(i==4){
        user.Mobile=data.toString();
        console.log(user);
        process.exit();
    }
});
if(process.argv[2]==undefined){
    console.log("命令行参数错误");
}
else if(process.argv[2]=="-h"){
    console.log("提示：命令行参数需为算数表达式");
}
else{
    console.log(process.argv[2]+"="+eval(process.argv[2]));
}
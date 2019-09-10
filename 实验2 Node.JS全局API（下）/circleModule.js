function circleFun(r){
    var r=r;
    function circumference(r){
        return 3.14*r*r;
    }
    function area(r){
        return 2*3.14*r;
    }
    return {
        circumference:circumference,
        area:area
    }
}
module.exports={
    circumference:circleFun().circumference,
    area:circleFun().area
}
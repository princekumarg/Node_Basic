function add(a,b,cb){
    let result=a+b;
    cb(result)
}
add(2,4,function(val){
    console.log(val);
})
//using arrow
function add(a,b,cb){
    let res=a+b;
    cb(res);
}
add(2,4,(val)=>console.log(val));
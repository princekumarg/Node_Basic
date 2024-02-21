//normal function
function add(a,b){
    return a+b;
}
console.log(add(2,3))
//arguments
function add1(a,b){
    let ans=0;
    for(let i=0;i<arguments.length;i=i+1){
        ans=ans+arguments[i];
    }
    return ans;
    // console.log(arguments);
}
add(2,3,4,5,6);
//spread operator
function add3(...numbers){
    let ans=0;
    for(let i=0;i<numbers.length;i++){
        ans=ans+numbers[i];
    }
    return ans;
}
let res=add3(1,2,3,4,5)
console.log(res)
//normal arrow function
const add=(a,b)=>{
    return a+b;
}
console.log(add(2,3))

//fast arrow function

const add2=(a,b)=>a+b;
console.log(add(2,3));

//this
const obj={
    value:20,
    myFunction:function(){
        console.log(this.value);
    },
};
obj.myFunction();
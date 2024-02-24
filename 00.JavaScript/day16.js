(function add(a,b){
    console.log(a+b);
})(2,3);
(function say(){
    console.log("Hello")
})
(()=>console.log("I am Es6"))();

const value=(()=>100)();
console.log(value);
const data=(async()=>await fetch())();
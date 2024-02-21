const student=["prince","kumar","tea","Jalba"]
console.log(student)
student[0]="prince kumar"
console.log(student);
student.push("Ram")
console.log(student)
student.push("sri","kumarteq")
console.log(student)
student.sort();
console.log(student)
student.reverse()
console.log(student)


//high order Array
function print(n){
    console.log(n)
}
student.forEach(print)

student.forEach((val)=>console.log(val))



//map
const num=[1,2,3,4,5]
num.forEach((nums)=>console.log(nums*2));

let newarr=[];
num.forEach((nums)=>newarr.push(nums*2));
console.log(newarr)


function double(n){
    return n*2;
}

let newArr=num.map(double);
console.log(newArr)


//other function are find,filter,slice,splice
function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`Sending email to ${to} with subject ${subject} and body ${body}`)
        };
    };
}
console.log(add(2)(3)(10));

const add=(a)=>(b)=>(c)=>a+b+c;
const atm=function(initalBalance){
    let balance=initalBalance;
    function withdraw(amout){
        if(balance<amout){
            console.log("Are You kidding?");
        }
        else{
            balance-=amout;
            return balance;
        }
    }
    return {withdraw};
};
const account=atm(1000);
console.log(account.withdraw(100));
console.log(account.withdraw(100));
console.log(account.withdraw(100));
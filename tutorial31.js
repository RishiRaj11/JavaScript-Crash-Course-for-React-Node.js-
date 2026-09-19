//CLOSURE IN JAVASCRIPT

// function outer(){
//     let count=0;
//     function inner(){
//         count++;
//         console.log(count)
//     }
//  return inner
// }
// const counter=outer()
// counter()
// counter()
// counter()

















//Real world example
function createBankAccount(initialBalance){
    let balance=initialBalance;

    return {
        deposit:function(amount){
            balance +=amount;
        },
        getBalance:function(){
            return balance;
        }

    }
}
const account=createBankAccount(1000);
console.log(account.getBalance())
account.deposit(500)
console.log(account.getBalance())
console.log(account.balance)
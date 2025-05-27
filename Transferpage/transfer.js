
// final.addEventListener('click',function(){
// // Accoun holder code!!



// // // From here transaction calaculation is taken place i mean the main logic
// // let amount = document.querySelector('.trans_amount')
// // let pin = document.querySelector('.tran_pin')


// // let bank_balance = localStorage.getItem("bank_balance")
// // bank_balance = Number(bank_balance);

// //     if(pin.value=='1234'){
// //         if(Number(bank_balance)>0 && Number(bank_balance)>=Number(amount.value)){
// //             let result = Number(bank_balance) - Number(amount.value);
// //             // result = Number(bank_balance);
// //             localStorage.setItem("bank_balance",result)
// //             alert("Your Amount Is Sucessfully Transfer");
// //             // window.location.href = "../bank_balance/balance.html";

// //         }
// //         else{
// //             alert("Enter account does have enough money to transfer")
// //         }
// //     }
// //     else{
// //         alert("Enter pin is invalid try again!!")
// //     }
// });




let final = document.querySelector('.final_call')
let pin = document.querySelector('.tran_pin')
let newpin = localStorage.getItem("newpin")||"1234"
let pass = Number(newpin)
final.addEventListener('click',function(){
    if(pin.value==pass){
    let acc_name = document.querySelector('.acc_name')
    let acc_no = document.querySelector('.acc_no')
    let phone_no = document.querySelector('.phone_no')
    let card_no = document.querySelector('.card_num')


if(acc_name.value!=acc_name.value.toUpperCase()){
    alert("Enter your Name only in captial Letters")
    return;
}
if(!acc_no.value.endsWith("900")){
    alert('Yuor account number is  invalid')
}
if(phone_no.value.length!==10){
    alert("Your Number is INvaild Cheak it ones again")
}
if (card_no.value.length!== 4) {
    alert('Your Card number must be exactly 4 digits');
}


let second_name = document.querySelector('.second_name')
let second_acc_num = document.querySelector('.second_acc_num')
let second_phone_no = document.querySelector('.second_phone_no')
let second_card_num = document.querySelector('.second_card_num')

if(second_name.value!=second_name.value.toUpperCase()){
    alert('Name should me in Captial Letters')
    return;
}
if(!second_acc_num.value.endsWith("900")){
    alert('Another account number is  invalid')
}
if(second_phone_no.value.length!==10){
    alert("Another Person Phone Number is inavlid")
}
if (second_card_num.value.length !== 4) {
    alert('Your Card number must be exactly 4 digits');
}

//  main logic starts here

let amount = document.querySelector('.trans_amount')
let b_balance = Number(localStorage.getItem("bank_balance"))||0;
let Amount = Number(amount.value)
if (Amount > b_balance) {
    alert("Insufficient balance to complete the transaction");
    return;
}
else{
let updatedBalance = b_balance - Amount;
localStorage.setItem("bank_balance",updatedBalance);
console.log(updatedBalance)
alert("Transaction successful! Remaining balance: ₹" + updatedBalance);
};
}
else{
    alert("You Enter The Wrong PIN Please Try Again")
    console.log("Your Entered Pin : "+ pin.value)
}
})
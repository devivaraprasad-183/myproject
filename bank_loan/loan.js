    let  btn =document.querySelector('.btn')
    btn.addEventListener('click',function(){
        let acc_name = document.querySelector('.acc_name')
        let card_num = document.querySelector('.card_num')
        let acc_num = document.querySelector('.acc_num')
let pin = localStorage.getItem("user_pin") || "1234";

        if(acc_name.value!=acc_name.value.toUpperCase()){
            alert("Entire Name should be in CAPITAL Letters")
        }
        if(!acc_num.value.endsWith("900")){
            alert("Invaild Account Number")
        }
        if(card_num.value!==pin){
            alert("Card Pin is Invaild")
        }
        


        // pan details
        let pan_num = document.querySelector('.pan_num')
        let phone_num = document.querySelector('.phone_num')
        let otp_num = document.querySelector('.otp_num')


        if(pan_num.value!="" && phone_num.value.length==10 && otp_num.value.length==4){
            let amount = document.querySelector('.amount')
            let b_balance = Number(localStorage.getItem("bank_balance"))||0;
            let Amount = Number(amount.value)
            let updated_Amount = Amount + b_balance;
            localStorage.setItem("bank_balance",updated_Amount)
            alert(`Your loan process was sucessfully done ${Amount}`)
            console.log("Loan Amount is SUCESSFULLY Add to your Account" + Amount)
        }
        else{
            alert("Something went wrong, Please Re-Enter Pan Details");
        };
    })
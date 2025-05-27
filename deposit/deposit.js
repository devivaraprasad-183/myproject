    // let amount = document.querySelector('.amount')
    // let pin = devicePixelRatio.querySelector('.pin')

    // localStorage.getItem("bank_balance")
    // window.location.href = "nextpage.html";
    // if(pin.value=="1234"){
    //     amount = Number(amount.value) + Number(bank_balance);
    //     localStorage.setItem('bank_balance',amount)
    //     window.location.href = "nextpage.html";
    // }
    // else{
    //     alert("the pin that you entered is inavlid");
    // }

    // let testcase = document.querySelector('.testcase')
    // let deposit = document.querySelector('.submit-btn')

    // deposit.addEventListener('click',function(){
    //     testcase.textContent = "amount";
    // });
    
    let amount = document.querySelector('.amount')
    let pin = document.querySelector('.pin')
    let testcase = document.querySelector('.textcase')
    let deposit = document.querySelector('.submit-btn')
    let newpin = localStorage.getItem("newpin")||"1234"
    let repass = Number(newpin);

    let savedamount = Number(localStorage.getItem("bank_balance"))||0;
  

  deposit.addEventListener('click',function(){
    if(pin.value==repass){
   let currentBalance = Number(localStorage.getItem("bank_balance")) || 0;
    let newAmount = Number(amount.value);
    let updatedBalance = currentBalance + newAmount;
    localStorage.setItem("bank_balance", updatedBalance);
    console.log(updatedBalance)
    testcase.textContent = `Updated Amount : ${updatedBalance}`

    }  
    else{
        alert("Your enter pin is incorrect please try again")
        console.log(pin.value);
    }  
    });



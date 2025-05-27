// pin code is done at start (i mean when the oage is loaded)
let newpin = localStorage.getItem("newpin")||"1234"
pin = Number(newpin)
let qq = document.querySelector('.container')
let v=0;
while(v<=5){
let cheak = prompt("enter your pin: ");
        if(cheak==pin){
                qq.style.display="block"
                break;
        }
        v++;
}

// here the rwa code is done

let bankbalance = document.querySelector('.Bankbalance')
let balance = Number(localStorage.getItem("bank_balance"))||0;
bankbalance.textContent=`₹${balance}`;


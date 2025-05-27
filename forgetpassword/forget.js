let account = document.querySelector('.Account_num');
let ent = document.querySelector('.ent');

ent.addEventListener('click', function () {
    // Get latest values on click
    let newpass = document.querySelector('.newpass');
    let againpass = document.querySelector('.againpass');

    if (!account.value.endsWith("900")) {
        alert("Account Number is invalid");
        return;
    }

    if (newpass.value === againpass.value) {
        alert("Your password has been successfully changed");
        localStorage.setItem('repass', newpass.value);
        // window.location.href = "../login/banklogin.html";
    } else {
        alert("Both the entered passwords are not same. Try again");
    }
});

let ten = document.querySelector('.ten');
ten.addEventListener('click', function () {
    window.location.href = "login/banklogin.html";
});

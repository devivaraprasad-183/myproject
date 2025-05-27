let forget = document.querySelector('.forget');
let btn = document.querySelector('.btn');
let password = document.querySelector('.user');

// Load repass from localStorage (or default if not set)
let repass = localStorage.getItem('repass') || "devi";

btn.addEventListener('click', function () {
    let userin = document.querySelector('.userin').value;

    if (userin === userin.toUpperCase() && userin !== "") {
        console.log("There is no error in username (input)");
        localStorage.setItem("username", userin);
        console.log("No error in setting item to username");

        if (password.value === repass) {
            console.log("No error at password area");
            window.location.href = "../homepage/homepage.html";
        } else {
            alert("Your Password that you enter is Incorrect. Try again.");
        }

    } else {
        alert("The Account Holder Name is not saved. Use UPPERCASE.");
    }
});

forget.addEventListener('click', function () {
    window.location.href = "../forgetpassword/forget.html";
});

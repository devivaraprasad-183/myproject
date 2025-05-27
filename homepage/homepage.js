  let username = localStorage.getItem("username");
function useed_name() {

  let user_name = document.querySelector('.user_name'); // <-- small 'd' in document
  if (username) {
    user_name.textContent = username;
  } else {
    user_name.textContent = "User"; // fallback
  }
}
console.log(username)

useed_name();


// Page navigation buttons
let transfer = document.querySelector('.action-button.transfer');
transfer.addEventListener('click', function () {
  window.location.href = "../Transferpage/transfer.html";
});

let add = document.querySelector('.action-button.add');
add.addEventListener('click', function () {
  window.location.href = "../deposit/deposit.html";
});

let check = document.querySelector('.action-button.check_balance');
check.addEventListener('click', function () {
  window.location.href = "../cheak_balance/cheak_balance.html";
});

let loan = document.querySelector('.action-button.loan');
loan.addEventListener('click', function () {
  window.location.href = "../bank_loan/loan.html";
});

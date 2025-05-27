const accNumInput = document.querySelector('.acc-num');
const newPinInput = document.querySelector('.new-pin');
const changeBtn = document.querySelector('.btn');

changeBtn.addEventListener('click', () => {
    const accNum = accNumInput.value.trim();
    const newPin = newPinInput.value.trim();

    if (accNum === "" || newPin === "") {
        alert("Please fill in all fields.");
        return;
    }
    localStorage.setItem("newpin", newPin);
    alert("PIN changed successfully!");
});

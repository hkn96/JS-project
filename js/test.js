let submitForm = document.getElementById('support-form');

let checkBox = document.getElementById('input-privacy');
let vorName = document.getElementById('input-fullname');
let email = document.getElementById('input-email');
let telNumber = document.getElementById('input-number');
let message = document.getElementById('input-message');
let prg = document.getElementById('prg');
if (checkBox.checked === true) {
    if (vorName.value === '') vorName.classList.add('border-red-500');
    if (telNumber.value=== '') telNumber.classList.add('border-red-500');
    if (email.value === '') email.classList.add('border-red-500');
    if (message.value === '') message.classList.add('border-red-500');
} else {
    prg.style.color = 'red';
    prg.style.fontSize = '1rem';
}
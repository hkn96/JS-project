/**
 * VALIDATE & SEND FORM
 * 1. Listen to the submit of the form element with the id "support-form"
 * 2. Validate on submit, that:
 *  2.1 the checkbox with the id "input-privacy" is checked
 *  2.2 all other inputs are not empty. If they're empty, add the class "border-red-500" to every empty input
 * 3. Send the form with the library axios as an POST REQUEST to https://hsh.blnq.dev/javascript-basics/form-fetch.php
 *
 * https://github.com/axios/axios
 *
 */

const submitForm = document.getElementById('support-form');
let checkBox = document.getElementById('input-privacy');
let vorName = document.getElementById('input-fullname');
let email = document.getElementById('input-email');
let telNumber = document.getElementById('input-number');
let message = document.getElementById('input-message');
let prg = document.getElementById('prg');
let bodyFormData = new FormData();

//  1. Listen to the submit of the form element with the id "support-form"

submitForm.addEventListener('submit', function (e) {
  e.preventDefault();

  //  2.1 the checkbox with the id "input-privacy" is checked
  if (checkBox.checked === true) {
    // 2.2 all other inputs are not empty. If they're empty, add the class "border-red-500" to every empty input

    if (vorName.value === '') vorName.classList.add('border-red-500');
    if (telNumber.value === '') telNumber.classList.add('border-red-500');
    if (email.value === '') email.classList.add('border-red-500');
    if (message.value === '') message.classList.add('border-red-500');
  } else {
    prg.style.color = 'red';
    prg.style.fontSize = '1rem';
  }

  sendData(new FormData(submitForm));
});

//  3. Send the form with the library axios as an POST REQUEST to https://hsh.blnq.dev/javascript-basics/form-fetch.php

function sendData(bodyFormData) {
  axios({
    method: 'post',
    url: 'https://hsh.blnq.dev/javascript-basics/form-fetch.php',
    data: bodyFormData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
    .then(function (response) {
      //handle success
      console.log(response);
      document.getElementById('submitted').value += ' (' + response.data + ')';
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
}

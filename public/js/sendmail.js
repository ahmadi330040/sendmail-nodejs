// const { response } = require("express");

const contactForm = document.querySelector(".contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    subject: subject.value,
    message: message.value 
  };

//  let xhr = new XMLHttpRequest();
// //  let url = '/';
//  xhr.open('POST', '/');
//  xhr.setRequestHeader('content-type', 'aplication/json');
//  xhr.onload = function() {
//   console.log(xhr.responseText);
//   if (xhr.responseText == 'success') {
//     alert('Email Send');
//     name.value = '';
//     email.value = '';
//     subject.value = '';
//     message.value = '';
//   } else {
//     alert('Somthing went Wrong !!')
//   }
// }

// xhr.send(JSON.stringify(formData));
// console.log(formData);

const sendData = async () => {
  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  } catch (error) {
    // alert(error.message)
    console.log('ini adalah error');
  }
}

sendData()


});

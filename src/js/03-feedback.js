import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form')
const email = document.getElementsByName('email')
const message = document.getElementsByName('message')

const formLisiner = (ev) => {
    ev.preventDefault();
    const {
        elements: {email, message}
    } = form;
    localStorage.setItem('feedback-form-state', JSON.stringify({email: email.value,message: message.value}))
}

form.addEventListener('input', throttle(formLisiner, 500));

const storageValue = localStorage.getItem('feedback-form-state');
const storageValueParse = JSON.parse(storageValue)
// const inputVal = localStorage.getItem('feedback-form-state');
// const parsedInputVal = JSON.parse(inputVal);
// if (parsedInputVal) {
//     if (parsedInputVal && parsedInputVal.email !== '') {
//       email.value = parsedInputVal.email;
//     }
//   }  
  
//   if (parsedInputVal) {
//     if (parsedInputVal && parsedInputVal.message !== '') {
//       message.value = parsedInputVal.message;
//     }
//   }  
  
  
  
//   const submitHandler = (event) => {
//     event.preventDefault();
  
//     const {
//       elements: { email, message },
//     } = form;
    
//     console.log(`Email: ${email.value}, Message: ${message.value}`);
    
//     form.reset();
    
//     localStorage.removeItem('feedback-form-state');
//   }
  
//   form.addEventListener('submit', submitHandler);





function formCheck () {
    const formEmail = document.getElementsByName('email');
    const formMessage = document.getElementsByName('message');
    const storageValue = localStorage.getItem('feedback-form-state');
    const storageValueParse = JSON.parse(storageValue)

    if (localStorage.getItem('feedback-form-state') !== null) {
        formMessage.value = storageValueParse.message;
        console.log(storageValueParse.message);
    }
}


// if (email === "") {
//     email.value = storageValueParse.email
// }


window.addEventListener('mousemove', throttle(formCheck, 1000));



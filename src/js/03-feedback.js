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
console.log(storageValueParse);

function checkForm (email, message, storageValueParse) {
    if (email && message !== '') {
        email.value = storageValueParse.email;
        message.value = storageValueParse.message;
    }
}

form.addEventListener('input', throttle(checkForm, 500))



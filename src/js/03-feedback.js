import throttle from "lodash.throttle";

//DOM Import
const form = document.querySelector('.feedback-form')
const email = document.querySelector('input');
const message = document.querySelector('textarea');

//Export data do localstorage
const formLisiner = (ev) => {
    ev.preventDefault();
    const {
        elements: {email, message}
    } = form;
    localStorage.setItem('feedback-form-state', JSON.stringify({email: email.value,message: message.value}))
}

//Listener for export data do localstorage
form.addEventListener('input', throttle(formLisiner, 500));

//JSON get and parse
const storageValue = localStorage.getItem('feedback-form-state');
const storageValueParse = JSON.parse(storageValue)

//Checking form function 
function formCheck () {
        if (storageValueParse && storageValueParse.email !== '') {
            email.value = storageValueParse.email;
        }
       
        if (storageValueParse && storageValueParse.message !== '') {
          message.value = storageValueParse.message;
        }
}

//Listener for import date to form
window.addEventListener('load', throttle(formCheck, 1));

//Console log email and passoword,reset form and remove data from local storage
const submitReset = (event) => {
    event.preventDefault();
  
    const {
      elements: { email, message },
    } = form;
    
    console.log(`Email: ${email.value}, Message: ${message.value}`);
    
    form.reset();
    
    localStorage.removeItem('feedback-form-state');
  }

//Listener for submit
form.addEventListener('submit', submitReset);
import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form')
const email = document.getElementsByName('email')
const message = document.getElementsByName('message')



// form.addEventListener('input', throttle(formLisiner, 500));

form.addEventListener("input", (ev) => {
    ev.preventDefault();
    const {
        elements: {email, message}
    } = form;
    localStorage.setItem('feedback-form-state', JSON.stringify({email: email.value,message: message.value}))
    
});

console.log(form.email.value);
// const formLisiner = (ev) => {
//     ev.preventDefault();
//     const {
//         elements: {email, message}
//     } = ev.currentTarget;
//     localStorage.setItem('feedback-form-state', JSON.stringify({email: email.value,message: message.value}))
// }


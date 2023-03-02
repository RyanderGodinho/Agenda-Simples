const form = document.querySelector('form');
const inputName = document.querySelector('#input-name')
const inputPassword = document.querySelector('#input-password');
const cancel = document.querySelector('#btn-decline');
const singIn = document.querySelector('#sing-in');


cancel.addEventListener('click', (event)=>{
  event.stopPropagation();
  if(!inputName.value || !inputPassword.value || !inputEmail.value){
    window.location = '../sing-in/index.html';
  }
})

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  event.stopPropagation();

  window.location = '../sing-in/index.html';
})

singIn.addEventListener('click', (event)=>{
  event.preventDefault();
  event.stopPropagation();

  window.location = '../sing-in/index.html';
})
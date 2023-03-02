const form = document.querySelector('form');
const singUp = document.querySelector('#sing-up');

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  event.stopPropagation();

  window.location = '../main/index.html'
})

singUp.addEventListener('click', (event)=>{
  event.preventDefault();
  event.stopPropagation();

  window.location = '../sing-up/index.html';
})
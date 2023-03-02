const singOut = document.querySelector('#sing-out');
const btnAdd = document.querySelector('#btn-add');
const btnTrash = document.querySelectorAll('.trash');
const modalAdd = document.querySelector('#fade-add');
const modalDelete = document.querySelector('#fade-delete');
const btnModalAdd = document.querySelector('#btn-ad');
const btnModalClear = document.querySelector('#btn-clear');
const btnCloseModal1 = document.querySelector('#close1');
const btnCloseModal2 = document.querySelector('#close2');
const formModal = document.querySelector('#form-modal-add');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputNumber = document.querySelector('#input-number');
const btnDelete = document.querySelector('#btn-delete');
const btnCancel = document.querySelector('#btn-cancel');

singOut.addEventListener('click', (event)=>{
  event.preventDefault();
  event.stopPropagation();
  window.location = '../../pages/sing-in/index.html';
});
btnAdd.addEventListener('click',(event)=>{
  event.preventDefault();
  event.stopPropagation();
  modalAdd.style.display = "block";
})
btnCloseModal1.addEventListener('click', (event)=>{
  event.preventDefault();
  event.stopPropagation();
  modalAdd.style.display = "none";
})
btnModalAdd.addEventListener('submit', (event)=>{
  event.preventDefault();
  event.stopPropagation();
  
})
btnModalClear.addEventListener('click', (event)=>{
  event.preventDefault();
  event.stopPropagation();
  inputName.value = '';
  inputEmail.value = '';
  inputNumber.value = '';
})
for (let i of btnTrash){
  i.addEventListener('click', (event)=>{
    event.preventDefault();
    event.stopPropagation();
    modalDelete.style.display = 'block';
  })
}
btnCloseModal2.addEventListener('click', (event)=>{
  event.preventDefault();
  event.stopPropagation();
  modalDelete.style.display = "none";
})
btnDelete.addEventListener('click', (event)=>{
  event.preventDefault();
  event.stopPropagation();
  modalDelete.style.display = "none";
})
btnCancel.addEventListener('click', (event)=>{
  event.preventDefault();
  event.stopPropagation();
  modalDelete.style.display = "none";
})
const btnOpen = document.getElementById('open');
const btnClose = document.getElementById('close');
const modal = document.getElementById('modal-container');

btnOpen.addEventListener('click',() =>{
    modal.classList.add('show')
})

btnClose.addEventListener('click',() =>{
    modal.classList.remove('show')
})
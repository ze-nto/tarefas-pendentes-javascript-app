let panelBtn = document.querySelector('.panelButton')
let lateral = document.querySelector('.lateral')
let isOpen = false;

panelBtn.addEventListener('click', () => {  
  lateral.classList.toggle('hideLateral')
  lateral.classList.toggle('showLateral')
  isOpen = !isOpen
  
})
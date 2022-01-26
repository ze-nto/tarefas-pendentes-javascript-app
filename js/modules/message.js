const modal = document.querySelector('.modal')

function showModal(message){
  modal.textContent = message
  modal.classList.add('activeModal')
  setTimeout(() => {
    modal.classList.remove('activeModal')
  }, 2000)
}
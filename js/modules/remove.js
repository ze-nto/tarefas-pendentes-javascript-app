let cancel = document.querySelector('.cancel-btn')
let delTask = document.querySelector('.del-btn')
let deleteModal = document.querySelector('.delModal')


cancel.addEventListener('click', cancelDel)
delTask.addEventListener('click', deleteConfirmation)


let taskToBeDeleted; 

function removeTask(event){
  deleteModal.classList.add('delActive')
  deleteModal.style.left = `${event.clientX}px`
  deleteModal.style.top = `${event.clientY}px`
  taskToBeDeleted = this.parentNode.parentNode
}

function cancelDel(){
  deleteModal.classList.remove('delActive')
}

function deleteConfirmation(){
  deleteModal.classList.remove('delActive')
  setTimeout(() => {
    taskToBeDeleted.classList.add('removeIt')
    list.removeChild(taskToBeDeleted)
    if(!list.childNodes.length){
      let legenda = document.querySelector('.legenda')
      let noTask = document.querySelector('.noTaskMsg')
      legenda.classList.remove('active')
      noTask.classList.remove('hide')
    }
  }, 100 )
  showModal('Tarefa removida')
}


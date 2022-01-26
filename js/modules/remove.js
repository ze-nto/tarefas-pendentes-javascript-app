

function removeTask(){
  let list = document.querySelector('.list > ul')
  let taskToBeDeleted = this.parentNode.parentNode
  taskToBeDeleted.classList.add('remove')
  setTimeout(() => {
    list.removeChild(taskToBeDeleted)
    if(!list.childNodes.length){
      let legenda = document.querySelector('.legenda')
      let noTask = document.querySelector('.noTaskMsg')
      legenda.classList.remove('active')
      noTask.classList.remove('hide')
    }
  }, 300 )
  showModal('Tarefa removida')

}


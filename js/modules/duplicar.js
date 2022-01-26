
function cloneTask(){
  let targetTask = this.parentNode.parentNode
  let newTask = targetTask.cloneNode(true)
  let list = document.querySelector('.list > ul').childNodes.length
  let newId = list + 1
  newTask.children[0].textContent = newId
  newTask.setAttribute('id', newId)
  targetTask.after(newTask)
  showModal('Tarefa duplicada')
}

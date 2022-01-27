let list = document.querySelector('.list > ul')
let form = document.querySelector('.form')
let formInput = form.elements[0]
let btn = document.querySelector('.form > button')
let legend = document.querySelector('.legenda')
let noTask = document.querySelector('.list .noTaskMsg')


function addTask(){
  let task = form.elements[0].value
  let li = document.createElement('li')
  li.className = "task"
  let priority = list.childNodes.length + 1
  li.setAttribute("id", priority)
  const content = ` 
    <span class="prioridade">${li.getAttribute('id')}</span> 
    <span class="descricao" contenteditable>${task}</span>
    <div class="controls">
      <div class="clone"><img src="./img/duplicate.png"></div>
      <div class="plus"><img src="./img/plus.png"></div>
      <div class="minus"><img src="./img/minus.png"></div>
      <div class="delete"><img src="./img/bin.png"></div>
    </div>`
    li.innerHTML = content.trim()
    list.appendChild(li)
    listeners()
    form.reset()
}

btn.addEventListener('click', (e) => {
  e.preventDefault()
  const ulList = document.querySelector('.list > ul')
  addTask()
  showModal("Uma tarefa adicionada")
  if(ulList.children !== 0){
    legend.classList.add('active')
    noTask.classList.add('hide')
  }
  btn.setAttribute("disabled", true)
})

formInput.addEventListener('blur', () => {
  if(formInput.value == ''){
    btn.setAttribute('disabled', true)
  }
})

formInput.addEventListener('keyup', () => {
  btn.removeAttribute('disabled')
})


function listeners() {
  const remove = document.querySelectorAll('.delete')
  const minus = document.querySelectorAll('.minus')
  const plus = document.querySelectorAll('.plus')
  const clone = document.querySelectorAll('.clone')
  remove.forEach(item => {
    item.addEventListener('click', removeTask)
  })
  minus.forEach(item => {
    item.addEventListener('click', lessPriority)
  })
  plus.forEach(item => {
    item.addEventListener('click', morePriority)
  })
  clone.forEach(item => {
    item.addEventListener('click', cloneTask)
  })
}
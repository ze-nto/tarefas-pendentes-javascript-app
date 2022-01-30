let total = document.querySelector('.pendentes');
let tasksList = document.querySelector('.list > ul'); 
let noTaskMsg = document.querySelector('.list .noTaskMsg'); 

let observer = new MutationObserver((MutationRecords) => {
  total.textContent = tasksList.childNodes.length;

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

  alterId()
  updateId()
  
})

observer.observe(tasksList, { childList: true});

let observerId = new MutationObserver((MutationRecords) => {
  updateId()
})

observerId.observe(tasksList, { attributeFilter: ["id"], subtree: true })

function updateId(){
  tasksList.childNodes.forEach((item) => {
    item.childNodes[0].textContent = item.getAttribute('id')
  })

}
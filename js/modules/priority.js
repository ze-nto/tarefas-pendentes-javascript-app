
function lessPriority(){
  let root = document.querySelector('.list > ul')
  let targetTask = this.parentNode.parentNode
  let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null, false)
  let node = walker.firstChild()
  while (node !== targetTask) {
    node = walker.nextSibling();
  }
  node = walker.nextSibling()
  if(node !== null){
  node.after(targetTask) 
  }

  alterId()

}

function morePriority(){
  let root = document.querySelector('.list > ul')
  let targetTask = this.parentNode.parentNode
  let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null, false)
  let node = walker.firstChild()
  while (node !== targetTask) {
    node = walker.nextSibling();
  }
  node = walker.previousSibling()
  if(node !== null){
    targetTask.classList.add('subir')
    node.before(targetTask)  
  }
  targetTask.classList.remove('subir')
  alterId()
  
}

function alterId() {
  let list2 = tasksList.childNodes
  list2.forEach((item, index) => {
    let num = index + 1
    item.setAttribute('id', num)
    // item.childNodes[0].textContent 
  })

}

let colorItens = document.querySelectorAll('.colorItem')
let body = document.querySelector('body')

colorItens.forEach(item => {
  item.addEventListener('click', () => {
    body.style.backgroundColor = `${item.getAttribute('data-color')}`
    console.log(item.getAttribute('data-color'))
  })
})
const form = document.getElementById('form')
const input = document.getElementById('input')
const itemsUl = document.getElementById('items')
let myItems = JSON.parse(localStorage.getItem('MyTasks')) || []

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  addTasks()
  
})

function render() {
  itemsUl.innerHTML = ''

  for (item of myItems) {
    let li = document.createElement('li')

    li.oncontextmenu = function(e) {
      e.preventDefault()

      deleteTask(this)
    }

    let inputValue = document.createTextNode(item)
    li.appendChild(inputValue)
    document.querySelector('ul').appendChild(li)

  }
}

render()

function addTasks() {
  let textInput = input.value

  if (textInput != '') {
    myItems.push(textInput)
    render()
    input.value = ''
    
    saveMyTasks() 

  } else {
    alert('Caixa de texto Vazia!')
  }

}

function tasksComplete() {
  itemsUl.addEventListener('click', (e) => {
    e.target.classList.add('form__list--disable')
  })
}

tasksComplete()

function deleteTask(tar) {

  myItems.splice(myItems.indexOf(tar.textContent), 1)

  render()

  saveMyTasks()
}



function saveMyTasks() {
  localStorage.setItem('MyTasks', JSON.stringify(myItems))
}










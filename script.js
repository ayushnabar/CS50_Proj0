const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

// {/* <li>
//     <input type = "checkbox" />
//     <button> delete</button>
//     <span>text</span>
// </li> */}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let todos = []

function renderTodo(todo){
  //render a single todo
}

function render(){
  //render todos in memopry to the page
  list.innerHTML = ''
  todos.map(renderTodo).forEach(todo => list.appendChild(todo))
  return false;
}
function addTodo(name){
  const todo = new todo(name)
  todos.push(todo)
  return render()
}
function removeTodo(){
  const todo = this.todoRef
  todos = todos.filter(t => t !== todo)
  return render()
}
var list_element = document.querySelector('#app ul');
var input_element = document.querySelector('#app input');
var button_element = document.querySelector('#app button');

var todos = [
    'Make coffee',
    'Study Javascript',
    'Access Rocketseat community'
]

function renderTodos() {
    for (todo of todos) {
        var todo_element = document.createElement('li');
        var todo_text = document.createTextNode(todo);
        
        list_element.appendChild(todo_element);
        todo_element.appendChild(todo_text);
    }
}

renderTodos();
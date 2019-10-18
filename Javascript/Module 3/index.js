var list_element = document.querySelector('#app ul');
var input_element = document.querySelector('#app input');
var button_element = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('todos')) || [];

renderTodos();

function renderTodos() {
    list_element.innerHTML = '';

    for (todo of todos) {
        var todo_element = document.createElement('li');
        var todo_text = document.createTextNode(todo);
        var link_element = document.createElement('a');
        var link_text = document.createTextNode('Exclude');
        var index = todos.indexOf(todo);
        link_element.setAttribute('href', '#');
        link_element.setAttribute('onclick', 'deleteTodo(' + index + ')')
        link_element.appendChild(link_text);
        
        list_element.appendChild(todo_element);
        todo_element.appendChild(todo_text);
        todo_element.appendChild(link_element);
    }
}

function addTodo() {
    var todo_text = input_element.value;
    todos.puch(todo_text);
    input_element.value = '';
    renderTodos();
    saveToStorage();
}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

button_element.onclick = addTodo;
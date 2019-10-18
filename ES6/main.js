class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo() {
        this.todos.push('New todo');
        console.log(this.todos);
    }
}

const my_list = new TodoList();

document.getElementById('newtodo').onclick = function() {
    my_list.addTodo();
}
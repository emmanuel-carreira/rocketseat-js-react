class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }
}

class TodoList extends List {
    
}

const my_list = new TodoList();

document.getElementById('newtodo').onclick = function() {
    my_list.add('New Todo');
}
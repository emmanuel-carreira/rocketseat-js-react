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
    constructor() {
        super();

        this.user = "Danilo";
    }

    showUser() {
        console.log(this.user);
    }
}

const my_list = new TodoList();
my_list.showUser();

document.getElementById('newtodo').onclick = function() {
    my_list.add('New Todo');
}
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

class Mathematics {
    static sum(a, b) {
        return a + b;
    }
}

const my_list = new TodoList();
my_list.showUser();

const number = {
    first: 8,
    second: 2
};

number.third = Mathematics.sum(8, 2);
console.log(number);

test(10);

document.getElementById('newtodo').onclick = function() {
    my_list.add('New Todo');
}

function test(x) {
    let y = 5;

    if(x > y) {
        let y = 4
        console.log(x + y);
    }
}
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

const array = [1, 3, 4, 5, 8, 9];
const new_array = array.map(function(item, index) {
    return item + index;
})
const summed_array = array.reduce(function(total, next) {
    return total + next;
});
const even_array = array.filter(function(item) {
    return item % 2 === 0;
});
const four = array.find(function(item) {
    return item === 4;
})

const map_array = array.map(item => item * 2);

const arrow = () => ({ str: 'arrow function is awesome!' });

console.log(new_array);
console.log(summed_array);
console.log(even_array);
console.log(four);
console.log(arrow());

number.third = Mathematics.sum(8, 2);
console.log(number);

test(10);

const user = {
    name: 'Woodpicker',
    age: 54,
    address: {
        city: 'Orlando',
        state: 'Florida',
    }
}

const { name, age, address: { city } } = user;
console.log(name);
console.log(age);
console.log(city);

console.log(showName(user))

const multiply_arrow = (a = 5, b = 10) => a * b;

function multiply(a = 3, b = 5) {
    return a * b;
}

function test(x) {
    let y = 5;

    if(x > y) {
        let y = 4
        console.log(x + y);
    }
}

function showName({ name }) {
    return name;
} 

document.getElementById('newtodo').onclick = function() {
    my_list.add('New Todo');
}

const user_rest = {
    name_rest: "Duck Donald",
    age_rest: 98,
    company_rest: "Walt Disney",
}

const { name_rest, ...rest } = user_rest;

console.log(name_rest);
console.log(rest);
console.log(sumOverload(1, 1, 2, 3, 5, 8, 13, 21, 34))

function sumOverload(...params) {
    return params.reduce((total, next) => total + next);
}

const array_odd = [1, 3, 5];
const array_even = [2, 4, 6];
const array_some_naturals = [ ...array_odd, array_even ];

const user_spread = {
    name_spread: "Uncle Scrooge",
    age_spread: "156",
    company_spread: "Walt Disney",
}

const user_spread_second = { ...user_spread, age_spread: 184 };

console.log(user_spread_second)
//Exercise 1

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    isAdmin() {
        if(this.admin) {
            return true;
        }
        else {
            return false;
        }
    }
}

class Admin extends User {
    constructor() {
        super();
        this.admin = true;
    }
}

const user = new User('duckdonald@walt.disney', 'huginho,zezinho,lusinho');
const admin = new Admin('unclescrooge@walt.disney', 'mypreciousgold');

console.log(user.isAdmin());
console.log(admin.isAdmin());

//Exercise 2
const users = [
    { name: 'Diego', age: 23, company: 'Rocketseat' },
    { name: 'Gabriel', age: 15, company: 'Rocketseat' },  
    { name: 'Lucas', age: 30, company: 'Facebook' },
];

const ages = users.map((user) => user.age);

const adults_rocketseat = users.filter( (user) => (user.age >= 18) && 
                                        (user.company === "Rocketseat")
                                      );
const googlers = users.find((user) => user.company === "Google");

var double_age_under_50 = users.map((user) => doubleAge(user))
                               .filter((user) => user.age < 50);
console.log(ages);
console.log(adults_rocketseat);
console.log(googlers);
console.log(double_age_under_50);

function doubleAge(user) {
    user.age = user.age * 2;
    return user;
}

//Exercise 3

//3.1
const arr = [1, 2, 3, 4, 5];
arr.map((item) => item+10);

//3.2
const user_3_2 = {
    name: "Diego", 
    age: 23 
};

const showAge = (user) => user.age;

console.log(showAge(user_3_2));

//3.3
const name_3_3 = "Diego";
const age_3_3 = 23;

const showUser = (name, age) => ( {name, age} );

console.log(showUser(name_3_3, age_3_3));
console.log(showUser(name_3_3));

//3.4
const promise = () => (new Promise((resolve,reject) => resolve()));

//Exercise 4

//4.1
const company = {
    company_name: "Rocketseat",
    address: {
        company_city: "Rio do Sul",
        company_state: "SC"
    }
}

const { company_name, address: { company_city, company_state } } = company;

console.log(company_name);
console.log(company_city);
console.log(company_state);

//4.2
console.log(showInfo({ name: 'Pink panther', age: 58 }));

function showInfo({ name, age}) {
    return `${name} has ${age} years old`
}
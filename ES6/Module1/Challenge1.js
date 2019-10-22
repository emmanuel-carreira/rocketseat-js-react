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

console.log(ages);
console.log(adults_rocketseat);
console.log(googlers);
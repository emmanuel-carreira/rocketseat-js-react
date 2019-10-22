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
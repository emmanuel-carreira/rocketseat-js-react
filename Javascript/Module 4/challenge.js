//Exercise 1
var checkAge = function(age) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(age >= 18) {
                resolve('User is more than 18 years old');
            }
            else {
                reject('User is underage');
            }
        }, 2000);
    });
};

checkAge(20)
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    });
//Exercise 2
//Exercise 3
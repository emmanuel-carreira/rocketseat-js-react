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
var username = document.querySelector('input');
var submit_button = document.querySelector('button');

submit_button.onclick = getRepos;
    
function getRepos() {
    var url = 'https://api.github.com/users/' + username.value +'/repos'
    username.value = '';

    axios.get(url)
        .then(function(response) {
            for(var i = 0; i < response.data.length; i++){
                var repo = response.data[i];
                addRepo(repo.name);
            }
        })
        .catch(function(error) {
            alert(error);
        });
};

function addRepo(repo_name) {
    var list = document.querySelector('ul');
    var list_element = document.createElement('li');
    list_element.textContent = repo_name;
    list.appendChild(list_element);
}

//Exercise 3
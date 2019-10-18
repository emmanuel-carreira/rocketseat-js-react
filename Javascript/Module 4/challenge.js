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
var list = document.querySelector('ul');
var loading_element = document.createElement('li');
loading_element.setAttribute('id', 'loading');
loading_element.textContent = 'Loading...';

submit_button.onclick = getRepos;
    
function getRepos() {
    var url = 'https://api.github.com/users/' + username.value +'/repos'
    username.value = '';
    list.appendChild(loading_element);

    axios.get(url)
        .then(function(response) {
            loading_element.remove();
            for(var i = 0; i < response.data.length; i++){
                var repo = response.data[i];
                addRepo(repo.name);
            }
        })
        .catch(function(error) {
            loading_element.remove();
            alert('User does not exist.');
        });
};

function addRepo(repo_name) {
    var list_element = document.createElement('li');
    list_element.textContent = repo_name;
    list.appendChild(list_element);
}
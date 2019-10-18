var my_promise = function() {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/emmanuel-carreira');
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
                else {
                    reject('Request error');
                }
            }
        }        
    });
};

my_promise()
    .then(function(response) {})
    .catch(function(error) {});
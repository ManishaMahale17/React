function getData() {
    return new Promise((resolve, reject) => {
        let ajax = new XMLHttpRequest();

        ajax.onload = function () {

            document.getElementById('resp').innerHTML += ajax.response;
            // success
            resolve(ajax.response);
        };

        ajax.onerror = function (error) {
            // failure  
            reject(e);
        };

        // open a request for REST API, start an async calls
        ajax.open("GET", "http://localhost:9090/api/getAll");
        // start sending the request
        ajax.send();
    });
}
function postData(employee) {
    return new Promise((resolve, reject) => {
        let ajax = new XMLHttpRequest();

        ajax.onload = function () {
            // success
            resolve(ajax.response);
        };

        ajax.onerror = function (error) {
            // failure  
            reject(e);
        };

        ajax.open("POST", "http://localhost:9090/api/post");
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(JSON.stringify(employee));
    });
}

function putData(id, employee) {
    // the id will go in header
    ajax.open("PUT", `http://localhost:9090/api/update/${id}`);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(employee));
}

function deleteData(id) {
    // the id will go in header
    ajax.open("DELETE", `http://localhost:9090/api/delete/${id}`);
}
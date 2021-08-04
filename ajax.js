console.log('Ajax Tutorial ');

let fetchBtn = document.getElementById('fetchBtn')
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('You have Clicked the FetchBtn');
    const xhr = new XMLHttpRequest();
    // const url = 'https://jsonplaceholder.typicode.com/todos/1'
    // xhr.open('GET', url, false);


    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);

    xhr.getResponseHeader('Content-type', 'application/json')

    // what to do on progress (optional)
    xhr.onprogress = function () {
        console.log('On Progress');
    }

    // xhr.onreadystatechange = function () {
    //     console.log('Ready state is ', xhr.readyState);
    // }

    // what to do when response is ready 
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }
        else {
            console.log("Some error occured");
        }
    }


    // send the request 

    // xhr.send();
    params = `{"name":"Sanjoy","salary":"150000","age":"24"}`
    xhr.send(params);
    console.log('We are Done');

}


let popBtn = document.getElementById('popBtn')

popBtn.addEventListener('click', popHandler)

function popHandler() {
    console.log('Pop handler Clicked');

    const xhr = new XMLHttpRequest();

    const url = 'https://api.github.com/users'
    xhr.open('GET', url, true);


    // what to do when response is ready 
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText)
            console.log(obj);
            let list = document.getElementById('list')

            str = ''
            for (key in obj) {
                str += `<li>Id : ${obj[key].id} ... User :  ${obj[key].login}</li>`
            }
            list.innerHTML = str
        }
        else {
            console.log("Some error occured");
        }
    }


    // send the request 

    // xhr.send();
    params = `{"name":"Sanjoy","salary":"150000","age":"24"}`
    xhr.send(params);
    console.log('We are Done');

}
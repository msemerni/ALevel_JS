
// function createEl ({userId, id, title, completed}) {
//     let div = document.createElement("div");
//     div.innerHTML = `<p>${userId} ${id} ${title}</p>`
//     document.body.appendChild(div);
// }

// fetch ("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(data => createEl(data))

// fetch ("https://jsonplaceholder.typicode.com/todos/2")
//     .then(response => response.json())
//     .then(data => createEl(data))

// let i = 1;
// while (i === 100) {
// fetch ("https://jsonplaceholder.typicode.com/todos/${i}")
//     .then(response => response.json())
//     .then(data => createEl(data))
//     i++;
//     // console.log(i);
// }

///////////////////////////////////////////////////////////////

//////////// НЕ РАБОТАЕТ
// function getData () {
    // let i = 1;
    fetch (`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        // .then(data => createEl(data))
        .then(data => data.map(item => createEl(item)))
        // .finally(() => getData(i + 1))
// }

// getData(10)
//////
// // function getData () {
// //     let i = 1;
// //     fetch (`https://jsonplaceholder.typicode.com/todos/${i}`)
// //         .then(response => response.json())
// //         // .then(data => createEl(data))
// //         .then(data => data.map(item => createEl(item)))
// //         // .finally(() => getData(i + 1))
// // }

// // getData(10)

// let i = 1;
// while (i <= 100) {
//     fetch (`https://jsonplaceholder.typicode.com/todos/${i}`)
//         .then(response => response.json())
//         .then(data => createEl(data));
//         i++;
// }



///////////////////////////// ДЗ //////////////////////////////////


function createEl ({userId, id, title, body}) {
    let div = document.createElement("div");
    div.classList = "col-3 card flex-column"
    div.innerHTML = `<h3 style="text-align: center">${userId}-${id}</h3>
    <h5>${title}</h5>
    <p>${body}</p>`

    let btnComments = document.createElement("button");
    btnComments.innerText = "Comments";
    btnComments.classList = "btn btn-secondary mt-auto";

    document.getElementById("container").appendChild(div).appendChild(btnComments);

}




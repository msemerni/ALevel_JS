
// function createEl ({userId, id, title, completed}) {
//     let div = document.createElement("div");
//     div.innerHTML = `<p>${userId} ${id} ${title}</p>`
//     document.body.appendChild(div);
// }

// // fetch ("https://jsonplaceholder.typicode.com/todos/1")
// //     .then(response => response.json())
// //     .then(data => createEl(data))

// // fetch ("https://jsonplaceholder.typicode.com/todos/2")
// //     .then(response => response.json())
// //     .then(data => createEl(data))


// ///////////////////
// //////////////////////////по порядку/////////////////////////////////////

// // function getData (i) {
// //     if(i < 100) {
// //     fetch (`https://jsonplaceholder.typicode.com/posts/${i}`)
// //         .then(response => response.json())
// //         .then(data => createEl(data))
// //         .finally(() => getData(i + 1))
// //     }
// // }
// // getData(1);

// ////////////////////////////не по порядку////////////////////////

// // let i = 1;
// // while (i <= 100) {
// //     fetch (`https://jsonplaceholder.typicode.com/todos/${i}`)
// //         .then(response => response.json())
// //         .then(data => createEl(data));
// //         i++;
// // }


////////////////////////////////////вывод постов///////////////////////////////////////////////////
// fetch (`https://jsonplaceholder.typicode.com/posts`)
// .then(response => response.json())
// .then(data => data.map(item => createEl(item)))


// function createEl ({userId, id, title, body}) {
//     let div = document.createElement("div");
//     div.classList = "col-3 card"
//     div.innerHTML = `<h3 style="text-align: center">${userId}-${id}</h3>
//     <h5>${title}</h5>
//     <p>${body}</p>`

//     let btnComments = document.createElement("button");
//     btnComments.innerText = "Comments";
//     btnComments.classList = "btn btn-secondary mt-auto";

//     document.getElementById("container").appendChild(div).appendChild(btnComments);
// }

////////////////////////////////////вывод постов и комментов///////////////////////////////////////////////////
function createComment (container, {body}){
    let div = document.createElement("div");
    div.innerHTML = `<p>${body}</p>`;
    container.appendChild(div);
}

function createEl ({title, body, id}) {
    let div = document.createElement("div");
    div.classList = "col-3 card";
    div.innerHTML = `
    <h3 style="text-align: center">${title}</h3>
    <p>${body}</p>`
    let btnComments = document.createElement("button");
    btnComments.innerText = "Comments";
    btnComments.classList = "btn btn-secondary mt-auto";
    btnComments.onclick = () => {
        fetch (`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(data => data.map(item => createComment(div, item)))
    }
    div.appendChild(btnComments);
    document.getElementById("container").appendChild(div);
}

fetch (`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(data => data.map(createEl))


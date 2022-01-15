// fetch (`https://jsonplaceholder.typicode.com/todos`)
//     .then(response => response.json())
//     .then(data => data.map(item => createEl(item)))

// function createEl ({userId, id, title, body}) {
//     let div = document.createElement("div");
//     div.classList = "col-3 card"
//     div.innerHTML = `<p>${userId} ${id} ${title} ${body}</p>`


//     let btnComments = document.createElement("button");
//     btnComments.innerText = "Comments";
//     btnComments.classList = "btn btn-secondary";

//     document.getElementById("container").appendChild(div).appendChild(btnComments);

// }

// // /////////////////////
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));






// // /////////////////////
// // // /////////////////////
// function createEl({id, title}){
    
//     let div = document.createElement('div');
//     let btn = document.createElement('button')
    
//     div.classList.add('col-md-4')
//     div.innerHTML = `<p>${id} ${title}</p>`
//     document.body.appendChild(div)
//     document.getElementById('container').append(div)
//     btn.innerText = 'knopka'
//     btn.classList = 'btn btn-primary'
//     btn.style.backgroundColor = 'black'
//     div.appendChild(btn)

//     function addComments({body}){
//         let p = document.createElement('p')
//         div.appendChild(p)
//         p.innerText = body
//     }

//     btn.addEventListener('click' ,(e) => { 
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
//         .then(response => response.json())
//         .then(data => data.map(data => addComments(data)))

//     } )

// }

// fetch (`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => response.json())
//     .then(data => data.map(item => createEl(item)))


// // /////////////////////
// // /////////////////////
function createEl({ id, title, body }) {
    let divContainerText = document.createElement('div') 
    let divContainerEdit = document.createElement('div') 
    divContainerEdit.className = 'd-none'
    divContainerText.innerHTML = `
    <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${body}</p>
    `
    let div = document.createElement('div')
    let cardHeader = document.createElement('div');
    cardHeader.className = 'card-header'
    cardHeader.innerHTML = `<p>${id}</p>`
    let btnDel = document.createElement('button')
    let btnShow = document.createElement('button')
    btnShow.innerText = 'Edit'
    btnShow.className = 'btn btn-primary'
    btnDel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>`
    btnDel.className = 'btn btn-danger'
    let postTitle = document.createElement('input')
    postTitle.className = 'card-title'
    let postBody = document.createElement('textarea')
    postBody.className = 'card-text'
    div.className ='col-md-6 card card-body'

    postTitle.value = title
    postBody.value = body

    btnShow.addEventListener('click', () => {
        divContainerEdit.classList.toggle('d-none')
        divContainerText.classList.toggle('d-none')
        divContainerText.innerHTML = `
        <div class="card-body">
        <h5 class="card-title">${postTitle.value}</h5>
        <p class="card-text">${postBody.value}</p>
        `
    })
    
    divContainerEdit.appendChild(postTitle)
    divContainerEdit.appendChild(postBody)
    cardHeader.appendChild(btnShow)
    cardHeader.appendChild(btnDel)
    div.appendChild(cardHeader)
    div.appendChild(divContainerEdit)
    div.appendChild(divContainerText)
    document.getElementById('container').append(div)

    div.addEventListener('change', (e) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: postTitle.value,
                body: postBody.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    })

    btnDel.addEventListener('click', (e) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        div.remove()
    })
}
////////////////////////////////////////////////////////////////////
    let btnAdd = document.createElement('button')
    btnAdd.innerText = 'Create Post'
    btnAdd.className = 'btn btn-success'
    document.getElementById('create_el').appendChild(btnAdd)

    btnAdd.addEventListener('click', (e) => {
        let div = document.createElement('div')
        let postTitle = document.createElement('input')
        let postBody = document.createElement('textarea')
        let btnSave = document.createElement('button')
        btnSave.innerText = "Save"
        btnSave.className = 'btn btn-success'
        div.appendChild(postTitle)
        div.appendChild(postBody)
        div.appendChild(btnSave)
        document.getElementById('create_el').appendChild(div)

        btnSave.addEventListener('click', (e) => { /// УДАЛИТЬ ЛИСТЕРЕН ПОСЛЕ ОТКРЫТИЯ РЕДАКТИРОВАНИЯ
            fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: 'POST',
                body: JSON.stringify({
                    title: postTitle.value,
                    body: postBody.value,
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {createEl(json); 
                    div.remove()});
        })
    })
////////////////////////////////////////////////////////////////////


fetch (`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(data => data.map(item => createEl(item)))














////////////////////////////////////////////////////////////////

// function createEl({id, title, body}){
    
//     let div = document.createElement('div');
//     let postTitle = document.createElement('input');
//     let postBody = document.createElement('input');
//     let cardHeader = document.createElement("div");
//     cardHeader.className = "card-header";
//     let btn = document.createElement("button");
//     btn.innerHTML = "<i class='bi bi-x'></i>";
//     btn.className = "btn btn-danger"
//     postTitle.value = title
//     postBody.value = body
//     div.appendChild(postBody)
//     div.appendChild(postTitle)
//     div.classList.add('col-md-6' , 'card')
    
//     document.body.appendChild(div)
//     document.getElementById('container').append(div)
//     div.addEventListener('change', (e) => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//             method: 'PATCH',
//             body: JSON.stringify({
//             title: postTitle.value,
//             body: postBody.value,
            
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//     })
    

// }

// fetch(`https://jsonplaceholder.typicode.com/posts`)
//         .then(response => response.json())
//         .then(data => data.map(data => createEl(data)))
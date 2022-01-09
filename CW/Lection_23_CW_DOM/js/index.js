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
// // // fetch('https://jsonplaceholder.typicode.com/posts/1', {
// // //   method: 'PUT',
// // //   body: JSON.stringify({
// // //     id: 1,
// // //     title: 'foo',
// // //     body: 'bar',
// // //     userId: 1,
// // //   }),
// // //   headers: {
// // //     'Content-type': 'application/json; charset=UTF-8',
// // //   },
// // // })
// // //   .then((response) => response.json())
// // //   .then((json) => console.log(json));


// // document.getElementById(containerId).append(this.mainContainer)

// // function createEl({id, title}){
    
// //     let div = document.createElement('div');
// //     let btn = document.createElement('button')
    
// //     div.classList.add('col-md-4')
// //     div.innerHTML = <p>$ ${id} ${title}</p>
// //     document.body.appendChild(div)
// //     document.getElementById('container').append(div)
// //     btn.innerText = 'knopka'
// //     btn.classList = 'btn'
// //     btn.style.backgroundColor = 'black'
// //     btn.class = 'btn-primary'
// //     div.appendChild(btn)
// //     function addComments({body}){
// //         let p = document.createElement('p')
// //         div.appendChild(p)
// //         p.innerText = body
// //     }
// //     btn.addEventListener('click' ,(e) => { 
// //         fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
// //         .then(response => response.json())
// //         .then(data => data.map(data => addComments(data)))

// //     } )

// // }


/////////////////////////////////////

function createEl({id, title, body}){
    
    let div = document.createElement('div');
    let postTitle = document.createElement('input');
    let postBody = document.createElement('input');
    let cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    let btn = document.createElement("button");
    btn.innerHTML = "<i class='bi bi-x'></i>";
    btn.className = "btn btn-danger"
    postTitle.value = title
    postBody.value = body
    div.appendChild(postBody)
    div.appendChild(postTitle)
    div.classList.add('col-md-6' , 'card')
    
    document.body.appendChild(div)
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
    

}

fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => data.map(data => createEl(data)))
// class Post {
//     constructor({ id, title, body }) {
//         this.id = id
//         this.title = title
//         this.body = body

//         this.div = document.createElement('div');
//         this.cardHeader = document.createElement('div')
//         this.divContainerEdit = document.createElement('div')
//         this.divContainerText = document.createElement('div')

//         this.divContainerText.className = 'd-none'
//         this.divContainerText.innerHTML = `
//         <p>  ${body}</p>
//         <p> ${title} </p>`

//         this.cardHeader.className = 'card-header'

//         this.div.className = 'col-md-6 card card-body'




//         this.postTitle = document.createElement('input');
//         this.postBody = document.createElement('textarea');

//         this.postTitle.className = 'card-title'
//         this.postBody.className = 'card-text'
//         this.postTitle.value = title
//         this.postBody.value = body

//         this.divContainerEdit.appendChild(this.postTitle)
//         this.divContainerEdit.appendChild(this.postBody)
//         this.div.appendChild(this.divContainerEdit)
//         this.div.appendChild(this.divContainerText)


//         this.btnShow = document.createElement('button')
//         this.btnShow.innerText = 'edit'
//         this.btnShow.className = 'btn btn-primary'

//         this.btnDelete = document.createElement('button')
//         this.div.appendChild(this.btnDelete)
//         this.btnDelete.innerHTML = `<p>${id}</p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
//         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
//       </svg>`
//         this.btnDelete.className = 'btn btn-danger'
//         this.cardHeader.append(this.btnDelete)
//         this.cardHeader.append(this.btnShow)
//         this.div.append(this.cardHeader)


//         this.btnShow.addEventListener('click', () => {
//             this.divContainerText.classList.toggle('d-none')
//             this.divContainerEdit.classList.toggle('d-none')
//             this.divContainerText.innerHTML = `<p>  ${body}</p>
//     <p> ${title} </p>`

//         })





//         // document.body.appendChild(div)
//         document.getElementById('container').append(this.div)
//         this.div.addEventListener('change', (e) => {
//             fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`, {
//                 method: 'PATCH',
//                 body: JSON.stringify({
//                     title: this.postTitle.value,
//                     body: this.postBody.value,

//                 }),
//                 headers: {
//                     'Content-type': 'application/json; charset=UTF-8',
//                 },
//             })
//                 .then((response) => response.json())
//                 .then((json) => console.log(json));
//         })


//         this.btnDelete.addEventListener('click', (e) => {
//             let myTimer
//             let c = 5
//             let myClock = () => {
//                 --c
//                 document.getElementById('btnTimer').innerText = `${c}`

//                 if (c == 0) {
//                     clearInterval();
//                 }
//             }
//             myTimer = setInterval(myClock, 1000)
//         })


//         this.btnDelete.addEventListener('click', (e) => {

//             this.btnTimer = document.createElement('button')
//             this.cardHeader.append(this.btnTimer)
//             this.btnTimer.className = 'btn btn-outline-info'
//             this.btnTimer.innerText = 'Cancel'
//             this.btnTimer.id = 'btnTimer'








//             let myFync = () => {
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//                     method: 'DELETE',
//                     headers: {
//                         'Content-type': 'application/json; charset=UTF-8',
//                     },
//                 })
//                     .then((response) => response.json())
//                     .then((json) => console.log(json));




//                 this.div.remove()
//             }
//             let myTimeOut = setTimeout(myFync, 6000)

//             this.btnTimer.addEventListener('click', () => {
//                 clearTimeout(myTimeOut)
//                 this.btnTimer.className = 'd-none'

//             })
//         })


//     }

// }


// // class Create{
// //         constructor(){


// //             this.btnPost = document.createElement('button')
// //             this.btnPost.innerText = 'create'
// //             this.btnPost.className = 'btn btn-success'
// //             document.getElementById('create_el').appendChild( this.btnPost)
// //             this.btnPost.addEventListener('click', ()=>{


// //                 this.div = document.createElement('div')   
// //                 this.postTitle = document.createElement('input');
// //                 this.postBody = document.createElement('input');
// //                 this.btn = document.createElement('button')
// //                 this.btn.innerText = 'save'
// //                 this.btn.className = 'btn btn-success'
// //                 this.div.appendChild( this.postTitle)
// //                 this.div.appendChild( this.postBody)
// //                 this.div.appendChild( this.btn)
// //             document.getElementById('create_el').appendChild(this.div)

// //             this.btn.addEventListener('click', (e) => {
// //                    fetch(`https://jsonplaceholder.typicode.com/posts/`, {
// //                        method: 'POST',
// //                        body: JSON.stringify({
// //                        title:  this.postTitle.value,
// //                        body:  this.postBody.value,

// //                        }),
// //                        headers: {
// //                            'Content-type': 'application/json; charset=UTF-8',
// //                        },
// //                })
// //                .then((response) => response.json())
// //                .then((json) => new Main (json))
// //                this.div.remove()
// //                })




// //            })













// //         }




// // }



// let btnPost = document.createElement('button')
// btnPost.innerText = 'create'
// btnPost.className = 'btn btn-success'
// document.getElementById('create_el').appendChild(btnPost)
// btnPost.addEventListener('click', () => {


//     document.getElementById('main').classList = 'd-none'
//     let div = document.createElement('div')
//     let postTitle = document.createElement('input');
//     let postBody = document.createElement('input');
//     let btn = document.createElement('button')
//     btn.innerText = 'save'
//     btn.className = 'btn btn-success'
//     div.appendChild(postTitle)
//     div.appendChild(postBody)
//     div.appendChild(btn)
//     document.getElementById('create_el').appendChild(div)




//     btn.addEventListener('click', (e) => {


//         if (postTitle.value.length < 5) { alert('Inkorect value') }
//         if (postBody.value.length < 10 || postBody.value.length > 355) { alert('Inkorect value') }
//         else {
//             fetch(`https://jsonplaceholder.typicode.com/posts/`, {
//                 method: 'POST',
//                 body: JSON.stringify({
//                     title: postTitle.value,
//                     body: postBody.value,

//                 }),
//                 headers: {
//                     'Content-type': 'application/json; charset=UTF-8',
//                 },
//             })
//                 .then((response) => response.json())
//                 .then((json) => new Main(json))
//             div.remove()
//             document.getElementById('main').classList = 'd-block'
//         }
//     })




// })





// // fetch(`https://jsonplaceholder.typicode.com/posts`)
// //         .then(response => response.json())
// //         .then(data => data.map(data => createEl(data)))






// fetch(`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => response.json())
//     .then(data => data.map(data => new Main(data)))



// class Start {
//     constructor() {
//         this.postContaierWrapper = document.createElement('div')
//         this.postContaierWrapper.className = 'container'

//     }

//     initPage() {
//         this.
//     }

// }


// let myApp = new Start();


/////// РАСКОММЕНТИТЬ ВСЁ
class Post {
    constructor({id, title, body}, containerId){
        this.id = id;
        this.title = title;
        this.body = body;

        this.postContainer = document.createElement("div");
        this.postContainer.classList = "col-4 card";
        this.postContainer.innerHTML = `
        <h4>${title}</h4>
        <p>${body}</p>
        <div class="info"></div>`;

        this.btnComments = document.createElement("button");
        this.btnComments.classList = "btn btn-secondary mt-auto";
        this.btnComments.innerText = "Show comments";
        // this.btnComments.addEventListener("click", () => this.showComments(id));
        this.postContainer.appendChild(this.btnComments);
        document.getElementById(containerId).append(this.postContainer);
        // this.btnComments.removeEventListener("click", () => this.showComments(id));

        const commentsDiv = this.postContainer.querySelector(".info");
        this.btnComments.onclick = () => {
            const isShow = commentsDiv.classList.toggle("show");
            if(isShow) {
                this.btnComments.innerText = "Hide comments";
                let xxx = commentsDiv.innerHTML = this.showComments(id);//////////// тут UNDERFINED
                console.log(xxx);//////////// тут UNDERFINED
                console.log("показал комменты");
            }
            else {
                this.btnComments.innerText = "Show comments"
                console.log("скрыл комменты");

            }
        }
    }

    createComment(container, {body}){
        const commentsDiv = this.postContainer.querySelector(".info");

        let div = document.createElement("div");
        div.innerHTML = `<p>${body}</p>`;
        // container.appendChild(div);  /// НЕ РАБОТАЕТ
        commentsDiv.appendChild(div);
    }

    showComments(id){
        fetch (`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(data => data.map(comment => this.createComment(this.commentsDiv, comment)))
    }

}


class Start {
    constructor(){
        fetch (`https://jsonplaceholder.typicode.com/posts`)
        .then(response => response.json())
        .then(data => data.map(data => new Post(data, "container")))
    };  
}

let myApp = new Start();










////////////////////////////////////вывод постов и комментов///////////////////////////////////////////////////
// function createComment (container, {body}){
//     let div = document.createElement("div");
//     div.innerHTML = `<p>${body}</p>`;
//     container.appendChild(div);
// }

// function createEl ({title, body, id}) {
//     let div = document.createElement("div");
//     div.classList = "col-3 card";
//     div.innerHTML = `
//     <h3 style="text-align: center">${title}</h3>
//     <p>${body}</p>`
//     let btnComments = document.createElement("button");
//     btnComments.innerText = "Comments";
//     btnComments.classList = "btn btn-secondary mt-auto";
//     btnComments.onclick = () => {
//         fetch (`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
//             .then(response => response.json())
//             .then(data => data.map(item => createComment(div, item)))
//     }
//     div.appendChild(btnComments);
//     document.getElementById("container").appendChild(div);
// }

// fetch (`https://jsonplaceholder.typicode.com/posts`)
//     .then(response => response.json())
//     .then(data => data.map(createEl))


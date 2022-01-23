class User {
    constructor({ id, name, address, company, email }, containerId) {
        this.id = id;
        this.name = name;
        this.city = address.city;
        this.company = company.name;
        this.userCard = document.createElement("div");
        this.userCard.classList = "col-6 card";
        this.userCard.innerHTML = `
        <h4>${this.name}</h4>
        <p>City: <b>${this.city}</b></p>
        <p>Company: <b>${this.company}</b></p>
        <p><a href ="mailto: ${email}">Email: ${email}</a></p>
        <div class="info">
            <ol type="1"></ol>
        </div>
        `;

        this.btnShowAlbums = document.createElement("button");
        this.btnShowAlbums.classList = "btn btn-primary mt-auto";
        this.btnShowAlbums.innerText = "Show albums";
        this.userCard.append(this.btnShowAlbums);
        document.getElementById(containerId).append(this.userCard);

        const albumList = this.userCard.querySelector(".info");
        const shAlbums = this.showAlbums(id);
        // const shPhotos = this.showPhotos(id);

        this.btnShowAlbums.addEventListener("click", () => {
            const isShow = albumList.classList.toggle("show");
            if (isShow) {
                this.btnShowAlbums.innerText = "Hide albums";
                albumList.innerHTML = shAlbums();
            }
            else {
                this.btnShowAlbums.innerText = "Show albums"
            }
        })
        
    }

    createAlbum(container, {id, title }) {
        const albumsDiv = this.userCard.querySelector(".info").querySelector("ol");
        let li = document.createElement("li");
        li.innerHTML = `<a href = #>${title}</a>`;
        // container.appendChild(div);  /// НЕ РАБОТАЕТ
        const shPhotos = this.showPhotos(id);

        li.addEventListener("click", ()=> {
            // const albumList = this.userCard.querySelector("container");
            document.body.innerHTML = shPhotos();
        })

        albumsDiv.append(li);
    }

    showAlbums(id) {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
            .then(response => response.json())
            .then(data => data.map(album => this.createAlbum(this.albumsDiv, album)))
    }

    createPhoto(container, {id, url }) {
        const albumsDiv = this.userCard.querySelector(".info");
        let div = document.createElement("div");
        div.classList = "card";
        div.innerHTML = `<img src = ${url}${id}>`;
        // container.appendChild(div);  /// НЕ РАБОТАЕТ
        albumsDiv.append(div);
    }
    showPhotos(id) {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
            .then(response => response.json())
            .then(data => data.map(photo => this.createPhoto(this.albumsDiv, photo)))
    }
}

class Start {
    constructor() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data => data.map(data => new User(data, "container")))
    };
}

let myApp = new Start();

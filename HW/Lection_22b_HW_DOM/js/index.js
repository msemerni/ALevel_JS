class User {
    constructor({id, name, address, company, email}, containerId){
        this.id = id;
        this.name = name;
        this.city = address.city;
        this.company = company.name;
        this.userCard = document.createElement("div");
        this.userCard.classList = "col-3 card";
        this.userCard.innerHTML = `
        <h4>${this.name}</h4>
        <p>City: <b>${this.city}</b></p>
        <p>Company: <b>${this.company}</b></p>
        <p>Email:  <a href ="mailto: ${email}">${email}</p>
        `;
        this.btnShowAlbums = document.createElement("button");
        this.btnShowAlbums.classList = "btn btn-secondary mt-auto";
        this.btnShowAlbums.innerText = "Show albums";
        this.userCard.appendChild(this.btnShowAlbums);
        document.getElementById(containerId).append(this.userCard);
    }
}

class Start {
    constructor(){
        fetch (`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => data.map(data => new User(data, "container")))
    };  
}

let myApp = new Start();

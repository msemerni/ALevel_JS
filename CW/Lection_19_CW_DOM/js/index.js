// import users from "./users.js";
import { users } from "./users.js";
console.log(users);

// const user = users[0];
// const {is, address, company, email} = user;

const createCard = (data) => {
    const {city, suite} = data.address;
    const card = document.createElement ("div");
    card.innerHTML = `
    <div>
        <h1>Name: ${data.name}</h1>
        <a href ="mailto: ${data.email}">Email: ${data.email}
        <a href="${data.website}">Website</a>
        <button class="show-info">Show info</button>
        <div class="info">
            <h3>Address: ${city} ${suite}</h3>
        </div>
        <hr>
    </div>
    `

    const button = card.querySelector(".show-info");
    const infoElement = card.querySelector(".info");
    button.onclick = () => {
        const isShow = infoElement.classList.toggle("show");
        if(isShow) {
            button.innerText = "Hide info"
        }
        else {
            button.innerText = "Show info"
        }
    }
    return card;
}

const renderCards = (list) => {
    const { body } = document; /// тоже самое что "document.body";
    const listOfCards = list.map((item) => createCard(item));
    body.innerHTML = "";
    body.append (...listOfCards);
}

renderCards(users);

//////////////////////////////////////////////
function User(asdf) {
    this.name = "Vasya"
}

console.log(User.prototype);

User.prototype.name = "Kolya";

const func = User();
const instance = new User();
console.log (instance.name); // Vasya

console.log (func);
console.log (instance);

instance.__proto__ === User.prototype; // true

///////

class Human {
    getFullName() {
        return "Human";
    }
    getSome() {
        return "Human Some"
    }
}

class User2 extends Human {
    getFullName() {
        this.name = "Misha"
        return "User";
    }
}

const inst = new User2();

console.log(inst.__proto__);

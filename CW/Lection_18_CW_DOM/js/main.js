import { items } from "./items.js";

let productsInBasket = [];
let spanbasket = document.getElementById("spanbasket");
let basketIcon = document.getElementById("basketIcon");
basketIcon.title = "";

function addProduct ({name, imgUrl, id, faceId, price, storage}) {
    let columnsRadio = document.getElementsByName ("columsNumber");
    let b = document.createElement("button");
    b.innerText = "Buy";
    b.classList = "btn btn-primary";
    let a = document.createElement("div");
    a.classList = "card";
    let columns;

    for (let i = 0; i < columnsRadio.length; i++) {
        if (columnsRadio[i].checked === true) {
            columns = columnsRadio[i].value;
        }

        switch (columns) {
            case "3":
                a.classList.add("col-4");
                break;
            case "6":
                a.classList.add("col-2");
                break;
            default:
                break;
        }
    }   

    a.innerHTML = `
    <h4>${name}</h4>
    <div class="img-container">
    <image src="img/${imgUrl}" class="card-img-top" alt="...">
    </div>
    <input type="checkbox" ${faceId ? "checked" : ""}
    <span>${price}</span>
    `
    a.append(b);

    b.addEventListener("click", (e) => {
        if (storage > 0) {
            let spanbasketValue = spanbasket.textContent;
            spanbasket.textContent = ++spanbasketValue;
            items.forEach(item => {
                if(id === item.id){
                    productsInBasket.push(item);
                }
            })
            basketIcon.title += `${name}\n`;
            basketIcon.classList.remove("basket-empty");
            basketIcon.classList.add("basket-full");
            console.log(productsInBasket);
        }
        else {
            alert ("No product in stock")
        };
    });
    document.getElementById("cardContainer").append(a);
}

items.map((item) => addProduct(item));

////////////////////////////////// find by name //////////////////////////////////////
let searchPanel = document.getElementById ("searchPanel");
let searchLabel = document.createElement("span");
searchLabel.innerText = "Search by name:"
searchPanel.appendChild(searchLabel);

let searchBox = document.createElement("input");
searchBox.type = "text";
searchPanel.appendChild(searchBox);

let searchBtn = document.createElement("button");
searchBtn.textContent = "Find";
searchPanel.appendChild(searchBtn);

searchBtn.addEventListener("click", findByName);

function findByName () {
    let findByNameResult = [];
    let patternSearch = searchBox.value.toLowerCase();

    findByNameResult = items.filter (item => item.name.toLowerCase().includes(patternSearch));

    if(findByNameResult.length > 0) {
        cardContainer.innerHTML = "";
        findByNameResult.map((item) => addProduct(item));
    }
    else{
        alert("Nothing found!");
    }
}

////////////////////////////////// find by price //////////////////////////////////////
function getMinMaxPrice (items) {
    let minPrice = Infinity;
    let maxPrice = 0;

    for (let i = 0; i < items.length; i++) {
        if(items[i].price < minPrice) {
            minPrice = items[i].price;
        }
        if(items[i].price > maxPrice) {
            maxPrice = items[i].price;
        }
    }
    return [minPrice, maxPrice];
}

let [minPrice, maxPrice] = getMinMaxPrice(items);

let firstPanel = document.querySelector (".firstPanel");

firstPanel.innerHTML = `
    <span>Price from:</span>
    <input id = "inputMin" type="number" value=${minPrice}></input>
    <span>to:</span>
    <input id = "inputMax" type="number" value=${maxPrice}></input>
    `
let findPriceBtn = document.createElement("button");
findPriceBtn.textContent = "Find";
firstPanel.appendChild(findPriceBtn);

findPriceBtn.addEventListener("click", () => {
    let minPrice = +document.getElementById("inputMin").value;
    let maxPrice = +document.getElementById("inputMax").value;
    if(minPrice <= maxPrice){
        let filteredItems = items.filter (item => ((item.price <= maxPrice) && (item.price >= minPrice)));
        if(filteredItems.length > 0){
            cardContainer.innerHTML = "";
            filteredItems.map((item) => addProduct(item));
        }
        else{
            alert("Nothing found!");
        }
    }
    else {
        alert("minPrice > maxPrice!");
    }
});

////////////////////////////////// 3 or 6 //////////////////////////////////////
document.body.addEventListener ("change", (e) => {
    let card = document.getElementsByClassName("card");
    let target = e.target;
    switch (target.id) {
        case "radioThree":
            for (let i = 0; i < card.length; i++){
                card[i].classList.add("col-4");
                card[i].classList.remove("col-2");
            }
            break;
        case "radioSix":
            for (let i = 0; i < card.length; i++){
                card[i].classList.add("col-2");
                card[i].classList.remove("col-4");
            }
            break;
        default:
            break;
    }
})

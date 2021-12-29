import { items } from "./items.js";

class Controller {
    constructor (items){
        this.inputMin = document.createElement("input");
        this.inputMin.type = "number"
        this.inputMin.addEventListener ("input", () => this.filter())
        document.getElementById("container").append(this.inputMin)
        this.items = items.map(item => new Item(item, "container"))
    }

    filter (){
        let value = this.inputMin.value;
        this.items.map(item => {
            if(item.price > value){
                item.mainContainer.style.display = "none"
            }
            else {
                item.mainContainer.style.display = "block"
            }
        })
    }
}

let myApp = new Controller(items);

///////////////////////////////////////////////////////////////////////////////
class Item {
    constructor({name, imgUrl, id, faceId, price, storage, orderInfo}){
        this.price = price
        this.btn = document.createElement('button')
        this.btn.innerText = 'Buy'
        this.btn.classList = "btn btn-primary"
        this.mainContainer = document.createElement('div')
        this.mainContainer.classList = 'col-2 card'
        this.mainContainer.id = id
        this.orderInfo = orderInfo.inStock;
        
        this.mainContainer.innerHTML=`<h3>${name}</h3>
        <image src ='img/${imgUrl}' class ='card-img-top'>
        <input type = 'checkbox' ${faceId ? "checked" : ""}
        <span>${price}</span>
        `
        this.mainContainer.append(this.btn)
        this.btn.addEventListener('click', (e) => { storage > 0 ? alert('You boght product with price ' + price) : alert('it is not in stock') })
        document.getElementById("container").append(this.mainContainer)
    }
}

let myGroup = items.map(item => new Item(item))

myGroup.map(item => document.getElementById('container').append(item.mainContainer))

myGroup.filter(item => item.price > 1500 || item.price < 800).map(item => item.mainContainer.style.display = 'none')


myGroup.filter(item => item.orderInfo > 0).map(item => item.mainContainer.style.display = 'none')

myGroup.map(item => {
    if (item.inStock > 0){
        item.mainContainer.style.display = 'none'
    }
})

myGroup.map(item => {
    if (item.price < 1000) {
        item.mainContainer.style.display = 'none'
    }
    else {
        item.mainContainer.style.display = 'block'
    }
})






// // //////////////////////////////////////////////
// //// своя функция map
// let testArray = [1, 2, 3];

// function func (item) {
//     return item * item;
// }

// function myMap (array, func) {
//     let newArray = [];
//     for (let item of array) {
//         newArray.push(func(item));
//     }
//     return newArray;
// }

// myMap (testArray, func);

// ////////////////////////////////////////////////
// //// своя функция filter
// let testArray2 = [1, 2, 3, 4, 5];
// function myFilter (array, func) {
//     let result = [];
//     for (let item of array) {
//         if (func(item))
//         result.push(item);
//     }
//     return result;
// }
// myFilter (testArray2,item => item % 2);

// ////////////////////////////////////////////////
// ////вариант push:
// let test = [1, 2, 3];
// test[test.length] = 4;
// //тоже самое что и:
// test.push(4);

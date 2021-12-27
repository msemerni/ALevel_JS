// // const button = document.querySelector("button");
// // console.dir(button);

// // button.onclick = function (e) {
// //     // console.log(e);
// //     // console.log(this);

// //     // if (e.ctrlKey) {
// //     //     console.log("Ctrl");
// //     // }
// //     // if (e.altKey) {
// //     //     console.log("Alt");
// //     // }
// //     // if (e.shifrKey) {
// //     //     console.log("Shift");
// //     // }
// //     // console.log("------------");

// //     ///////////////////////////////////////////////////

// //     console.log(e.target);

// //     ///////////////////////////////////////////////////

// //     const input = document.querySelector("input");
// //     const h1 = document.querySelector("h1");

// //     input.oninput = (e) => {
// //         const text = e.target.value;
// //         h1.innerText = text;
// //     }

// // document.querySelector("form").onsubmit = (e) => {
// //     e.preventDefault(); // отменяет стандартное поведение отправки формы (теперь не перезагружает страницу)
// //     // const name = e.target.elements;

// //     const {name, lastname} = e.target.elements;
// //     console.log(name.value);

// // }

// //     ///////////////////////////////////////////////////

// //     document.querySelector("form").addEventListener("submit", (e) => {
// //         e.preventDefault(); // отменяет стандартное поведение отправки формы (теперь не перезагружает страницу)
// //         // const name = e.target.elements;
    
// //         const {name, lastname} = e.target.elements;
// //         console.log(name.value);
    
// //     }

    


// // }
// // const formsubmit = (e) => {

// //         console.log("555");
    
// //     }
// //     document.querySelector("form").addEventListener("submit", formsubmit )....


// //     ///////////////////////////////////////////////////

// const div = document.querySelector("div");
// const button = document.querySelector("button");
// const checkBox = document.querySelector("checkbox");

// const elemList = [document, document.body, div, button];

// elemList.forEach(element => {
//     element.addEventListener(
//         "click",
//         (e) => console.log(element.tagName),
//         true ////false - по умолчанию
//     )
// })

// document.body.addEventListener(
//     "click",
//     (e) => console.log("Phase1")
//     // console.log(e.target)
//     ,
//     true
// )


// let isListenEvents = false;

// checkBox.onchange = (e) => {
//     isListenEvents = !isListenEvents;
//     if (isListenEvents) {

//     }

//     e.preventDefault(); // отменяет стандартное поведение отправки формы (теперь не перезагружает страницу)
//     e.stopPropagation(); // отменяет всплытие
//     e.stopImmediatePropagation(); // отменяет всплытие и отключает все последующие listenerы

// }

// elemList.forEach(element => {
//     element.addEventListener(
//         "click", (e) => {
//             if (element.tagName === "DIV" && e.stopPropagation()){
//             console.log(element.tagName)
//             }
        
//         }
//     )
// })
// //////////////////////////////////////////
// const isAnaliticEnabled = false;

// elemList.forEach(element => {
//     element.addEventListener(
//         "click", (e) => {
//             element.tagName === "DIV" && isAnaliticEnabled;
//             console.log(element.tagName);
//             e.stopImmediatePropagation()
        
//         }
//     )
// })


// //////////////////////////////////////////

class Item {
    constructor (name, price) {
        this.id = Item.id++;
        this.name = name;
        this.price = price;
        this.color = this.getRandomColor();
    }
    static id = 1;

    getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
    }

    // getRandomColor() { не доделано
    //     var result = '#';
    //     var alphabet = 'abcdef';
    //     for (var i = 0; i < 6; i++) {
    //       color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    //     }


}


const itemNames = ["Vaz", "BMW", "Audi", "Mercedes"]

const cars = itemNames.map(name => {
    const price = Math.ceil(Math.random()*100000)
    return new Item(name, price);
})

console.log(cars)

class Cart {
    constructor(){
        this.items = [];
        this.totalPrice = 0;
        this.totalAmount = 0;
    }

    #calculateTotals (){
        const result = this.items.reduce((acc,item) => {
            return{
                totalPrice: acc.totalPrice + (item.carData.price * item.ammount);
                totalAmount: acc.totalAmount + item.ammount;
            } 

        },
        {
            totalAmount: 0,
            totalPrice: 0
        })
        Object.assign(this,result);
    }

    addItem(car){
        const carInCart = this.items.find(item => car.id === item.id);
    if(carInCart) {
        carInCart.ammount++;
    }
    else{
        this.items.push({
            id: car.id,
            ammount: 1
        })
    }
}





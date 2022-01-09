class Item {
    constructor (name, price) {
        this.id = Item.id++;
        this.name = name;
        this.price = price;
        this.color = this.getRandomColor();
    }
    static id = 1;

    getFullInfo() {
        return this.name + " " + this.price;
    }

    getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
    }

    //// второй вариант:
    // getRandomInt(min, max) {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    // getRandomColor() {
    //     var result = '#';
    //     var alphabet = 'abcdef';
    //     for (var i = 0; i < 6; i++) {
    //         const isNumber = this.getRandomInt (1, 6) >= 3;
    //         result += isNumber ? this.getRandomInt (0, 9) : alphabet [this.getRandomInt (0, alphabet.length - 1)];
    //     }
    //     return result.toUpperCase();
    // }
    //// get min max random js
    //// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
}

const itemNames = ["Vaz", "BMW", "Audi", "Mercedes"]

const cars = itemNames.map((name) => {
    const price = Math.ceil(Math.random() * 10000);
    return new Item(name, price);
})

console.log(cars)

class Cart {
    constructor(){
        this.items = [];
        this.totalPrice = 0;
        this.totalAmmount = 0;
    }

    #calculateTotals (){
        const result = this.items.reduce((acc,item) => {
            return{
                totalPrice: acc.totalPrice + (item.carData.price * item.ammount),
                totalAmmount: acc.totalAmmount + item.ammount
            } 
        },
        {//// acc
            totalAmmount: 0, 
            totalPrice: 0
        })
        Object.assign(this,result);
    }

    getFullInfo () {
        return "Price: " + this.totalPrice + "; " + "Total ammount: " + this.totalAmmount;
    }

    addItem(car){
        const carInCart = this.items.find(item => car.id === item.id);
        if(carInCart) {
            carInCart.ammount++;
        }
        else{
            this.items.push({
                id: car.id,
                carData: car,
                ammount: 1
            })
        }
        this.#calculateTotals();
    }

}

const cart = new Cart();

cars.forEach ((item) => {
    const button = document.createElement("button");
    button.innerText = item.getFullInfo();
    button.style.background = item.color;
    button.onclick = () => {
        cart.addItem(item);
        document.querySelector("h1").innerText = cart.getFullInfo();
    }
    document.querySelector("div").append(button);
}
)

// const button = document.querySelector("button");
// console.dir(button);

// button.onclick = function (e) {
//     // console.log(e);
//     // console.log(this);
//     //////////////
//     // console.log("click");

//     // if (e.ctrlKey) {
//     //     console.log("Ctrl");
//     // }
//     // if (e.altKey) {
//     //     console.log("Alt");
//     // }
//     // if (e.shiftKey) {
//     //     console.log("Shift");
//     // }
//     // console.log("------------");
//     ///////////////
//     console.log(e.target);
// }

// // //     ///////////////////////////////////////////////////
// const input = document.querySelector("input");
// const h1 = document.querySelector("h1");

// input.oninput = (e) => {
//     const text = e.target.value;
//     h1.innerText = text;
// }
// // //     ///////////////////////////////////////////////////

 
// document.querySelector("form").onsubmit = (e) => {
//     e.preventDefault(); // отменяет стандартное поведение отправки формы (теперь не перезагружает страницу)
//     const name1 = e.target.elements;
//     console.log(name1);
//     console.log(name1.value);

//     const {name, lastname} = e.target.elements;
//     console.log(name.value);
//     console.log(lastname.value);

// }

// // //     ///////////////////// EventListener //////////////////////////////

//     const formsubmit = (e) => {
//         e.preventDefault(); // отменяет стандартное поведение отправки формы (теперь не перезагружает страницу)
//         // const name = e.target.elements;
//         console.log("submit1");
    
//         const {name, lastname} = e.target.elements;
//         console.log(name.value);
    
//     }

//     document.querySelector("form").addEventListener("submit", formsubmit); // добавил
//     document.querySelector("form").removeEventListener("submit", formsubmit); // и удалил сразу же
    

// //     //////////////// 2.Всплытие и погружение ///////////////////////////////////

const div = document.querySelector("div");
const button = document.querySelector("button");
// const checkBox = document.querySelector("checkbox");
const checkBox = document.querySelector("input[type='checkbox']");

const elemList = [document, document.body, div, button];

elemList.forEach(element => {element.onclick = () => console.log(element.tagName)})

elemList.forEach(element => {
    element.addEventListener("click", (e) => {
        // e.stopPropagation()
        element.tagName === "DIV" && e.stopPropagation()
        // console.log(element.tagName)
    },false) ////true - на погружении, false - по умолчанию
})
 
document.body.addEventListener("click", (e) => console.log("Phase1", e.target),true) 

// checkBox.onchange = (e) => console.log(e);
let isListenEvents = false;

const analyticCallback = (e) => console.log("Analytic:", e.target);

checkBox.onchange = (e) => {
    isListenEvents = !isListenEvents;
    console.log(isListenEvents);
    if (isListenEvents){
        document.body.addEventListener("click", analyticCallback, true)
    } else {
        document.body.removeEventListener("click", analyticCallback)
    }

    }

////     e.preventDefault(); // отменяет стандартное поведение отправки формы (теперь не перезагружает страницу)
////     e.stopPropagation(); // отменяет всплытие
////     e.stopImmediatePropagation(); // отменяет всплытие и отключает все последующие listenerы для элемента


// //////////////////////////////////////////
// const isAnalyticEnabled = true;

// elemList.forEach(element => {
//     element.addEventListener(
//         "click", (e) => {
//             if (element.tagName === "DIV" && isAnalyticEnabled) {
//             // e.stopPropagation()
//             e.stopImmediatePropagation()

//         }
//         console.log(element.tagName);
//     }
//     )
//     element.addEventListener (
//         "click", (e) => {

//         console.log("analytic enabled")
//         }

//     )
// })


let form = document.createElement("form");
document.body.appendChild(form);
form.method = "GET";
form.action = "https://google.com/";

let formName = document.createElement("input");
formName.type = "text";
formName.name = "name";
formName.placeholder = "your name";
form.appendChild(formName);

let formSurname = document.createElement("input");
formSurname.type = "text";
formSurname.name = "surname";
formSurname.placeholder = "your surname";
form.appendChild(formSurname);

let formAge = document.createElement("input");
formAge.type = "number";
formAge.name = "age";
formAge.placeholder = "your age";
form.appendChild(formAge);

let submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.type = "submit";
document.body.appendChild(submitBtn);

//// ошибки ввода
let alertName = document.createElement("span"); 
alertName.innerText = "Incorrect name! Should be > 3 letters";
document.body.appendChild(alertName);
alertName.style.display = "none";

let alertSurname = document.createElement("span"); 
alertSurname.innerText = "Incorrect surname! Should be > 3 letters";
document.body.appendChild(alertSurname);
alertSurname.style.display = "none";

let alertAge = document.createElement("span"); 
alertAge.innerText = "Incorrect age! Should be > 15 and < 80";
document.body.appendChild(alertAge);
alertAge.style.display = "none";

//// обработчик онклика и валидация
submitBtn.onclick = () => {

let isFormValid = true;

    if (!(formName.value.length > 3)) {
        isFormValid = false;
        alertName.style.display = "flex";
    }

    if (!(formSurname.value.length > 3)) {
        isFormValid = false;
        alertSurname.style.display = "flex";
    }

    if (!(formAge.value > 15) || !(formAge.value < 80)){
        isFormValid = false;
        alertAge.style.display = "flex";
    }

    console.log(isFormValid);
    isFormValid && form.submit();
};

formName.oninput = (e) => {
    alertName.style.display = "none";
}
formSurname.oninput = (e) => {
    alertSurname.style.display = "none";
}
formAge.oninput = (e) => {
    alertAge.style.display = "none";
}
















///////////////////////////// CW ///////////////////////////////////
// let a = document.createElement("form");
// document.body.appendChild(a);

// let b = document.createElement("input");
// b.type = "number";
// b.placeholder = "chislo";

// a.appendChild(b);

// let c = document.createElement("input");
// c.type = "date";

// a.appendChild(c);

// let btn = document.createElement("button");
// btn.textContent = "Submit";
// btn.type = "submit";
// a.appendChild(btn);

// b.oninput = (e) => {alert(e.target.value)}

// b.value;

// b.oninput = (e) => {console.log(e)}

// a.submit;

//////////////


// let form = document.createElement("form");
// document.body.appendChild(form);
// form.method = "GET";
// form.action = "https://google.com/";


// let formName = document.createElement("input");  //// > 3 symbols
// formName.type = "text";
// formName.name = "name";
// formName.placeholder = "your name";
// form.appendChild(formName);

// let formSurname = document.createElement("input"); //// > 3 symbols
// formSurname.type = "text";
// formSurname.name = "surname";
// formSurname.placeholder = "your surname";
// form.appendChild(formSurname);

// let age = document.createElement("input");  //// 15-80
// age.type = "number";
// age.name = "age";
// age.placeholder = "your age";
// form.appendChild(age);

// let submitBtn = document.createElement("button");
// submitBtn.textContent = "Submit";
// submitBtn.type = "submit";
// document.body.appendChild(submitBtn);
// submitBtn.onclick = () => {

// let isFormValid = true;
// console.log(isFormValid);

//     if (!age.value > 15 && !age.value < 80) {
//         isFormValid = false;
//         alert("Incorrect age!");
//     console.log(isFormValid);


//         // let alertAge = document.createElement("label"); 
//         // alertAge.innerText = "Incorrect age!";
//         // document.body.appendChild(alertAge);

//     }

//     if (!formName.value.length > 3) {
//         isFormValid = false;
//         alert("Incorrect name!");
//     console.log(isFormValid);

//     }

//     if (!formSurname.value.length > 3) {
//         isFormValid = false;
//         alert("Incorrect surname!");
//     console.log(isFormValid);

//     }

//     // if (isFormValid === true){
//     //     form.submit();
//     // }
//     console.log(isFormValid);
//     isFormValid && form.submit();
// };





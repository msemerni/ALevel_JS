
let a = document.createElement("form");
document.body.appendChild(a);

let b = document.createElement("input");
b.type = "number";
b.placeholder = "chislo";

a.appendChild(b);

let c = document.createElement("input");
c.type = "date";

a.appendChild(c);

let btn = document.createElement("button");
btn.textContent = "Submit";
btn.type = "submit";
a.appendChild(btn);

b.oninput = (e) => {alert(e.target.value)}

b.value;

b.oninput = (e) => {console.log(e)}

a.submit;

//////////////








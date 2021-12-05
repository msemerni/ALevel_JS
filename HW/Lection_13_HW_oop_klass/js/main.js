import {emplyeeArr} from "js/employeearr.js";

        
//// _________________________01_________________________
//// Создать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee из массива emplyeeArr;
//// const employeeObj = new Emploee(employee);
////   {
////     id: 0,
////     name: 'Valeriy',
////     surname: 'Zhmishenko',
////     salary: 1000, 
////     workExperience: 10, 
////     isPrivileges: true, 
////     gender: 'male',
////   }
////   etc.

console.log("************** 1st ***************");

function Employee(id, name, surname, salary, workExperience, isPrivileges, gender) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.workExperience = workExperience;
    this.isPrivileges = isPrivileges;
    this.gender = gender;
}
//// console.log(Object.getOwnPropertyNames(Employee)); как получить список свойств Employee без создания экземпляра? => никак
const me = new Employee(1, "Misha", "Semernin", 1800, 12, true, "Male");
console.log(Object.getOwnPropertyNames(me));

//// _________________________02_________________________
//// Добавить функции - конструктору метод (помним про prototype): getFullName 
//// который вернет полное имя начиная с фамилии в виде строки
//// employeeObj.getFullName() // 'Zhmishenko Valeriy';

console.log("************** 2nd ***************");

Employee.prototype.getFullName = function () {
    return `${this.surname} ${this.name}`;
    //console.log(`${this.surname} ${this.name}`);
}
console.log(me.getFullName());

//// _________________________03_________________________
//// Создать новый массив на основе emplyeeArr в котором будут содержаться те же обьекты, 
//// но созданные функцией - конструктором Emploee. Новый массив должен содержать имя emplyeeConstructArr.
//// let createEmployesFromArr = (arr) => {
//// .... Your code
//// };
//// const emplyeeConstructArr = createEmployesFromArr(emplyeeArr) /// [{id: 0, name: 'Valeriy', surname: 'Zhmishenko', salary: 1000,  workExperience: 10,  isPrivileges: true, gender:'male' }]

console.log("************** 3rd ***************");


let createEmployesFromArr = (arr) => {

    var myArr = [];
    for (var i = 0; i < arr.length; i++) {
        myArr.push(new Employee(arr[i].id, arr[i].name, arr[i].surname, arr[i].salary, 
        arr[i].workExperience, arr[i].isPrivileges, arr[i].gender));
    }
    return myArr;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
console.log(emplyeeConstructArr);

// let arrNew = Array.from(employeeArr)

// let ddd = emplyeeArr;
// console.log(ddd);











////////////////////////////////////////////// 02 Перечисление свойств ////////////////////////////////////////////////////////
// // const me = new Employee(1, "Misha", "Semernin", 1800, 12, true, "Male");
// // me.getFullName();
// // //// 1
// // function listAllProperties(o) {
// //     var objectToInspect;
// //     var result = [];

// //     for (objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
// //         result = result.concat(Object.getOwnPropertyNames(objectToInspect));
// //     }

// //     return result;
// // }
// // console.log(listAllProperties(me)); 
// // //// 2
// // console.log(Object.keys(me)); //массив со всеми собственными (те, что в цепочке прототипов, не войдут в массив) именами перечисляемых свойств объекта
// // //// 3
// // console.log(Object.getOwnPropertyNames(me)); // массив содержащий все имена своих свойств (перечисляемых и неперечисляемых)
// // //// 4
// // for (prop in me) {
// //     console.log(`${prop}: ${me[prop]}`); // все перечисляемые свойства объекта и его цепочка прототипов
// // }
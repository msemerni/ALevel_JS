//// _________________________01_________________________
//// Создать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee из массива employeeArr;
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
import { employeeArr } from "./employeearr.js";
////////////////////////////////////Первый вариант/////////////////////////////////////
// function Employee(id = "UNKNOWN", name = "UNKNOWN", surname, salary, workExperience, isPrivileges, gender) { //// UNKNOWN - если не передается значение
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.salary = salary;
//     this.workExperience = workExperience;
//     this.isPrivileges = isPrivileges;
//     this.gender = gender;
// }
////////////////////////////////////Второй вариант/////////////////////////////////////
// class EmployeeClass {
//     #id = "UNKNOWN";
//     #name = "UNKNOWN";
//     #surname = "UNKNOWN";
//     #salary = "UNKNOWN";
//     #workExperience = "UNKNOWN";
//     #isPrivileges = "UNKNOWN";
//     #gender = "UNKNOWN";

//     constructor(someArray) {
//         this.id = someArray.id;
//         this.name = someArray.name;
//         this.surname = someArray.surname;
//         this.salary = someArray.salary;
//         this.workExperience = someArray.workExperience;
//         this.isPrivileges = someArray.isPrivileges;
//         this.gender = someArray.gender;
//     }

//     get id() { return this.#id; }
//     set id(value) {
//         if (typeof(value) === "number") {
//             this.#id = value; 
//         }
//     }
//     get name() { return this.#name; }
//     set name(value) {
//         if (typeof(value) === "string") {

//             this.#name = value; 
//         }
//     }
//     get surname() { return this.#surname; }
//     set surname(value) { this.#surname = value; }
//     get salary() { return this.#salary; }
//     set salary(value) { this.#salary = value; }
//     get workExperience() { return this.#workExperience; }
//     set workExperience(value) { this.#workExperience = value; }
//     get isPrivileges() { return this.#isPrivileges; }
//     set isPrivileges(value) { this.#isPrivileges = value; }
//     get gender() { return this.#gender; }
//     set gender(value) { this.#gender = value; }

// }

// const myProfile = new EmployeeClass({id: 1, name: "Misha", surname: "Semernin", salary: 1800, workExperience: 12, isPrivileges: true, gender: "male" });
// console.log(myProfile);

////////////////////////////////////Третий вариант - если надо только эти поля взять из входящего объекта/////////////////////////////////////

// function Employee(someArray) {
//     if (someArray.hasOwnProperty("id")) {
//         this.id = someArray.id;
//     }
//     // else {
//     //     this.id = "UNKNOWN";
//     // }
//     this.name = someArray.name;
//     this.surname = someArray.surname;
//     this.salary = someArray.salary;
//     this.workExperience = someArray.workExperience;
//     this.isPrivileges = someArray.isPrivileges;
//     this.gender = someArray.gender;
// }

////////////////////////////////////Четвёртый вариант - если надо все поля во входящем объекте/////////////////////////////////////

function Employee(someArray) {
    Object.entries(someArray).forEach(([key, value]) => {
        ////if (this.hasOwnProperty(key)) {} - как-то так - если надо добавить только те поля из входящего массива, которые есть в конструкторе
        switch (key) {
            case "name":
                //     this.name = (value && (value.length >= 25)) ? value : "UNKNOWN";
                //     break;
                // default:
                //     this[key] = value;
                if (value && (value.length <= 25)) {
                    this.name = value;
                }
                else {
                    console.error("Name is incorrect");
                }
                break;
            default:
                this[key] = value;
                break;
        }
    })
}

//// console.log(Object.getOwnPropertyNames(Employee)); как получить список свойств Employee без создания экземпляра? => никак?
const employeeObjMe = { id: 1, name: "Misha", surname: "Semernin", salary: 1800, workExperience: 12, isPrivileges: true, gender: "male" };
const me = new Employee(employeeObjMe);
console.log(Object.entries(me));

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
//// Создать новый массив на основе employeeArr в котором будут содержаться те же обьекты, 
//// но созданные функцией - конструктором Emploee. Новый массив должен содержать имя emplyeeConstructArr.
//// let createEmployesFromArr = (arr) => {
//// .... Your code
//// };
//// const emplyeeConstructArr = createEmployesFromArr(employeeArr) /// [{id: 0, name: 'Valeriy', surname: 'Zhmishenko', salary: 1000,  workExperience: 10,  isPrivileges: true, gender:'male' }]

console.log("************** 3rd ***************");
////////////////////////////////////Первый вариант/////////////////////////////////////
// let createEmployesFromArr = (arr) => {
//     const myArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         // myArr.push(new Employee(arr[i].id, arr[i].name, arr[i].surname, arr[i].salary,
//         //     arr[i].workExperience, arr[i].isPrivileges, arr[i].gender));
//         myArr.push(new Employee(arr[i]));
//     }
//     return myArr;
// };
////////////////////////////////////Второй вариант/////////////////////////////////////
function createEmployesFromArr(arr) {
    return arr.map((arrValue) => new Employee(arrValue));
}

const emplyeeConstructArr = createEmployesFromArr(employeeArr);
console.log(emplyeeConstructArr);

//// _________________________04_________________________
//// Создать функцию которая вернет массив со всеми полными именами каждого employee, 
//// содержащегося в emplyeeConstructArr;
//// const getFullNamesFromArr = (arr) => {
//// ... Your code
//// }
//// getFullNamesFromArr(emplyeeConstructArr) /// ['Денис Хрущ', 'Сергей Войлов', ... ]

console.log("************** 4th ***************");
const getFullNamesFromArr = (arr) => {
    const fullNameArray = [];
    for (var i = 0; i < arr.length; i++) {
        fullNameArray.push(`${arr[i].name} ${arr[i].surname}`)
    }
    return fullNameArray;
}

const fullNameArray = getFullNamesFromArr(emplyeeConstructArr);
console.log(fullNameArray);

//// _________________________05_________________________
//// Создать функцию которая вернет среднее значение зарплаты всех employee
//// const getMiddleSalary = (arr) => {
////    ... Your code
////}
//// getMiddleSalary(emplyeeConstructArr) /// 1560

console.log("************** 5th ***************");
const getMiddleSalary = (arr) => {
    // let avgSalary = arr.reduce((sum, arr) => sum + arr.salary, 0) / arr.length;
    // return avgSalary;
    return arr.reduce((sum, arr) => sum + arr.salary, 0) / arr.length;

}
const avgSalary = getMiddleSalary(emplyeeConstructArr);
console.log(`Avarage salary: $${Math.round(avgSalary)}`);

//// _________________________06_________________________
//// Создать функцию которая выберет наугад работника из массива emplyeeConstructArr. 
//// Вы должны учитывать в функции длинну массива, так как если работников 7, 
//// а рандомное число будет равно больше 7, то результат будет undefined. 
//// Вы можете использовать обьявленную функцию в самой же себе. Подсказка Math.random
//// const getRandomEmployee = (arr) => {
//// ... Your code
//// }
//// getRandomEmployee(emplyeeConstructArr) /// {id: 0, name: 'Valeriy', surname: 'Zhmishenko', salary: 1000,  workExperience: 10,  isPrivileges: true, gender:'male' }

console.log("************** 6th ***************");
const getRandomEmployee = (arr) => {
    const randomEmployee = Math.floor(Math.random() * arr.length);
    return randomEmployee;
}
const randomEmployee = getRandomEmployee(emplyeeConstructArr)
console.log(emplyeeConstructArr[randomEmployee]);

//// _________________________07_________________________
//// Создать дескриптор со свойством fullInfo который будет записывать все свойства переданные ему в экземпляр 
//// от которого он вызывается. И выдавать все свойства, если к нему обратиться, 
//// в виде строки <Название свойства> - <значение> через запятую.
//// const employeeObj = new Emploee(employeeArr[0]);
//// employeeObj.fullInfo
//// Результат
////  id - 1, name - Денис, surname - Хрущ

console.log("************** 7th ***************");

const employeeObj = new Employee(employeeArr[0]);

console.log(employeeObj);

Object.defineProperty(employeeObj, 'fullInfo', {
    get: function () {
        let result = "";
        for (let key in employeeObj) {
            if (employeeObj.hasOwnProperty(key)) {
                result += `${key} - ${employeeObj[key]}, `;
            }
        }
        result = result.substr(0, result.length - 2);
        console.log(result);
        return result;

        // const {id, name, surname, salary, workExperience, isPrivileges, gender} = employeeObj;
        // console.log(id, name, surname, salary, workExperience, isPrivileges, gender);
    },
    set: function (newObjValues) {
        Object.entries(newObjValues).forEach(([key, value]) => {
            if (value && this.hasOwnProperty(key)) {
                this[key] = value;
            }
        });
    }
});

employeeObj.fullInfo; // getter

employeeObj.fullInfo = { id: 222, name: 'Вася новый', salary: 8000}; // setter
employeeObj.fullInfo; // getter

// Object.preventExtensions(employeeObj); //// не добавляет новый объект если какое-то свойство в передаваемом объекте не было объявленно в классе (пр. Имеил) ??

employeeObj.fullInfo = { id: 333, name: 'Вася новый 2', salary: 9000, email: 'ex@mail.ua' }; // setter
employeeObj.fullInfo; // getter

// console.log(`New object: ${Object.entries(employeeObj)}`);














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
// // console.log(Object.entries(me));
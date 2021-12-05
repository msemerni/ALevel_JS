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

// function Employee(id, name, surname, salary, workExperience, isPrivileges, gender) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.salary = salary;
//     this.workExperience = workExperience;
//     this.isPrivileges = isPrivileges;
//     this.gender = gender;
// }

function Employee(someArray) {
    this.id = someArray.id;
    this.name = someArray.name;
    this.surname = someArray.surname;
    this.salary = someArray.salary;
    this.workExperience = someArray.workExperience;
    this.isPrivileges = someArray.isPrivileges;
    this.gender = someArray.gender;
}
//// console.log(Object.getOwnPropertyNames(Employee)); как получить список свойств Employee без создания экземпляра? => никак
const me = new Employee({id: 1, name: "Misha", surname: "Semernin", salary: 1800, workExperience: 12, isPrivileges: true, gender: "male"});
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
//// Создать новый массив на основе employeeArr в котором будут содержаться те же обьекты, 
//// но созданные функцией - конструктором Emploee. Новый массив должен содержать имя emplyeeConstructArr.
//// let createEmployesFromArr = (arr) => {
//// .... Your code
//// };
//// const emplyeeConstructArr = createEmployesFromArr(employeeArr) /// [{id: 0, name: 'Valeriy', surname: 'Zhmishenko', salary: 1000,  workExperience: 10,  isPrivileges: true, gender:'male' }]

console.log("************** 3rd ***************");
import { employeeArr } from "./employeearr.js";
let createEmployesFromArr = (arr) => {
    const myArr = [];
    for (var i = 0; i < arr.length; i++) {
        // myArr.push(new Employee(arr[i].id, arr[i].name, arr[i].surname, arr[i].salary,
        //     arr[i].workExperience, arr[i].isPrivileges, arr[i].gender));
        myArr.push(arr[i]);
    }
    return myArr;
};
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
    let avgSalary = arr.reduce((sum, arr) => sum + arr.salary, 0) / arr.length;
    return avgSalary;
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
console.log("TASK IN PROGRESS");

const employeeObj = new Employee(employeeArr[0]);

console.log(employeeObj);

Object.defineProperty(employeeObj, 'fullInfo', {
    get: function () {
        var result = "";
        for (var i in employeeObj) {
            if (employeeObj.hasOwnProperty(i)) {
                result += `${i} - ${employeeObj[i]}, `;
            }
        }
        result = result.substr(0, result.length - 2);
        console.log(result);
        return result;

        // const {id, name, surname, salary, workExperience, isPrivileges, gender} = employeeObj;
        // console.log(id, name, surname, salary, workExperience, isPrivileges, gender);

    },
    set: function (...params) {
        this.name = params[0];
        console.log(this.name);
        return this.name;
    }
});

employeeObj.fullInfo;
employeeObj.fullInfo = {name: 'Вася', salary: 9000, email: 'ex@mail.ua'};














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
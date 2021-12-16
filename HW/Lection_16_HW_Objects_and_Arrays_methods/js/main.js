import { condidateArr } from "./candidates.js";
// console.log(condidateArr.length); // 65

    const cundidates = [ //// 5 шт.
        {
        id: 1,
        name: 'Денис',
        surname: 'Хрущ',
        salary: 1010, 
    },
    {
        id: 2,
        name: 'Сергей',
        surname: 'Войлов',
        salary: 1200, 
    },
    {
        id: 3,
        name: 'Татьяна',
        surname: 'Коваленко',
        salary: 480, 
    },
    {
        id: 4,
        name: 'Анна',
        surname: 'Кугир',
        salary: 2430, 
    },
    {
        id: 5,
        name: 'Ольга',
        surname: 'Капустник',
        salary: 3150, 
    },
    ]   

//// _________________________01_________________________
//// Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром. 
//// const arr = ['Vasya', 'Petya', 'Alexey']
//// removeUser(arr, 1)
//// console.log(arr) /// ['Vasya', 'Alexey']

console.log("************** 1st ***************");

function removeUser (someArray, indexToDelete) {
    someArray.splice(indexToDelete, 1);
    console.log(cundidates);
    ////console.log(`Remained students: ${cundidates}`); //// console.log(cundidates) => cundidates.toString ???
}

removeUser(cundidates, 3);

//// _________________________02_________________________
//// Создать функцию которая вернет все ключи обьекта переданного параметром
//// const obj = { name: 'Vasya', age: 1}
//// getAllKeys(obj) /// ["name", "age"]

console.log("************** 2nd ***************");

const cundidateOne = cundidates[0];

function getAllKeys (cundidate) {
    let cundidateKeys = Object.keys(cundidate);
    console.log(cundidateKeys);
}

getAllKeys(cundidateOne);
console.log(Object.getOwnPropertyNames(cundidateOne));


//// _________________________03_________________________
//// Создать функцию которая вернет все значения объекта переданного параметром
//// const obj = { name: 'Vasya', age: 1}
//// getAllValues(obj) /// ["Vasya", 1]

console.log("************** 3rd ***************");

function getAllValues (cundidate) {
    let cundidateValues = Object.values(cundidate);
    console.log(cundidateValues);
}

getAllValues(cundidateOne);

//// _________________________04_________________________
//// Содать функцию,где мы первым параметром передадим объект с новым кандидатом, 
//// а вторым параметром - id любого кондидата в массиве condidateArr. 
//// Функция должна будет вставить кандидата переданного через первый параметр в массив перед 
//// кондидатом у которого id равно тому что передали во-втором параметре

console.log("************** 4th ***************");

const firstObj = {
    id: 33,
    name: 'Vasya'
};

const secondObj = {
    id: 44,
    name: 'Katya'
};

function insertIntoarr (newCundidate, idInMainArray) {
    Object.keys(cundidates).forEach(([key]) => {
        if (key == idInMainArray)
        {
            cundidates.splice(idInMainArray - 1, 0, newCundidate);
        }
    })
}

insertIntoarr(firstObj, 3);
insertIntoarr(secondObj, 1);
console.log(cundidates);

//// _________________________05_________________________
//// Создайте класс Condidate который будет принимать параметром объект из массива condidateArr. 
//// Добавить метод с именем state который вернет шатат в котором живает наш кондидат. 
//// Информация о штате находится в свойстве address и это третья запись после запятой.
//// const condidate = new Condidate(condidateArr[0])
//// condidate.state /// Colorado

console.log("************** 5th ***************");

class Condidate {
    constructor (someObject) {
        Object.entries(someObject).forEach(([key, value]) => {
            this[key] = value;
        });
    }

    state () {
        if (this.address) {
            const fullAddressArray = this.address.split(",");
            const state = fullAddressArray[2].trim();
            console.log(state);
            return state;
        }
        else{
            console.log("State not found");
        }
    }

}

const condidate1 = new Condidate(condidateArr[0]);
condidate1.state();

//// _________________________06_________________________
//// Создать функцию которая выведет массив с названиями фирм взятыми из св-ва company. 
//// Если фирмы повторяются в массиве, то удалить дубликаты. Все так же используем массив candidateArr
//// getCompanyNames() /// [""EZENT, "JASPER" ... ]

console.log("************** 6th ***************");

function getCompanyNames (someArray) {
    let firmArray = [];
    for (let i = 0; i < someArray.length; i++) {
        firmArray.push(someArray[i].company);
    }
    let uniqueCompanyNames = new Set(firmArray);
    firmArray = [...uniqueCompanyNames];
    console.log("All firms:");
    console.log(firmArray.sort());
    return firmArray;
}

getCompanyNames(condidateArr);

//// _________________________07_________________________
//// Создать функцию которая выведет мне массив id всех кондидатов, которые были зарагестрированны 
//// в том же году что и год указанный в параметре.
//// getUsersByYear(2017) /// ["e216bc9cab1bd9dbae25637", "5e216bc9e51667c70ee19f4f" ...]

console.log("************** 7th ***************");

function getUsersByYear (year) {
    // "registered": "2015-11-05T05:14:05 -02:00"
    let usersByYear = [];
    for (let i = 0; i < condidateArr.length; i++) {
        let fullDate = condidateArr[i].registered;
        let userDate = +fullDate.slice(0, 4); //+ это приведение к числу
        if(userDate === year){
            usersByYear.push(condidateArr[i]._id);
        }
    }

    if(usersByYear.length > 0){
        console.log(`Registered in ${year}:`);
        console.log(usersByYear);
    }
    else {
        console.log(`Registered in ${year}: Nobody`);
    }
    return usersByYear;
}
// let $2017 = getUsersByYear(2017);
getUsersByYear(2017);
getUsersByYear(2021);

//// _________________________08_________________________
//// Создать функцию которая вернет массив с экземплярами - кандидатами, отфильтрованных по кол-ву 
//// непрочитанных сообщений. Смотрим св-во greeting, там указанно это количество в строке, 
//// Вам надо достать это число из строки и сверять с тем что в параметер вашей функции.
//// Все так же используем массив candidateArr
//// getCondidatesByUnreadMsg(8) /// [Condidate, Condidate ...]

console.log("************** 8th ***************");

// let msg = "Hello, Bernice Walton! You have 4 unread messages.";
// let num = +(msg.match(/\d+/));

function getCondidatesByUnreadMsg (numberOfMessage) {
    let filteredCandidatesByMessage = [];
    for (let i =0; i < condidateArr.length; i++){
        let numOfMessage = +((condidateArr[i].greeting).match(/\d+/));
            if (numberOfMessage === numOfMessage) {
                filteredCandidatesByMessage.push(condidateArr[i]);
            }
    }
    console.log(`${numberOfMessage} unread messages:`);
    console.log(filteredCandidatesByMessage);
    return filteredCandidatesByMessage;
}

getCondidatesByUnreadMsg(8);

//// _________________________09_________________________
//// Создать функцию которая вернет массив по свойству gender.
//// Все так же используем массив candidateArr
//// getCondidatesByGender('male') /// [Condidate, Condidate ...]

console.log("************** 9th ***************");

function getCondidatesByGender (gender) {
    let filteredCandidatesByGender = [];
    for (let i =0; i < condidateArr.length; i++){
        let genderProperty = condidateArr[i].gender;
        if (gender === genderProperty) {
            filteredCandidatesByGender.push(condidateArr[i]);
            }
    }
    console.log(`Gender ${gender}:`);
    console.log(filteredCandidatesByGender);
    return filteredCandidatesByGender;
}

getCondidatesByGender("male");
getCondidatesByGender("female");

//// _________________________10_________________________
//// Создать функцию reduce, join самому как на занятии создавали forEach, map, find, filter и т.д.

console.log("************** 10th ***************");

console.log("NOT DONE");

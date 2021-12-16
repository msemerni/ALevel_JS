//// _________________________01_________________________
//// Задача - создать класс Student который принимает аргументом в конструкторе объект enrollee (абитурент). У экземпляра класса Student должны быть поля:
//// id - уникальный идентификатор студента (генерируется при создании экземпляра и начинается с 1);
//// name - имя студента (передаем в объекте enrollee);
//// surname - фамилия студента (передаем в объекте enrollee);
//// ratingPoint - рейтинг студента по результатам вступительных экзаменов (передаем в объекте enrollee);
//// schoolPoint - рейтинг студента по результатам ЗНО (передаем в объекте enrollee);
//// isSelfPayment - если true, то студент на контракте, если false - на бюджете (генерируется по логике указанной ниже).
//// Id генерируется автоматически при создании экземпляра Student. isSelfPayment определяется по параметру "ratingPoint". Если ratingPoint больше или равен 800, то студент может быть на бюджет, но бюджет он может получить только если его "ratingPoint" не меньше чем у других студентов в массиве. Студентов которые на бюджете не должно быть больше чем 5 в массиве. То есть если "ratingPoint" больше чем хоть у одного из 5 бюджетников то мы присваиваем isSelfPayment = false. И в этот момент студент из массива который имел isSelfPayment = false, но его ratingPoint меньше чем у остальных 5 бюджетников, с нашим включительно, то ему делаем isSelfPayment = true, то есть переводим этого неудачника на контракт. Что делать если у 6-рых студентов баллы 1000? Ну имеется ввиду, если 2 человека с одинаковыми баллами ratingPoint борются за 5 бюджетное место? В таком случае смотрим на schoolRating, у кого он больше тот и на бюджете.
//// При каждом новом вызове конструктора, все логика должна отрабатывать таким образом, что пересчет будет изменяться с новым студентом включительно.

console.log("************** 1st ***************");

const studentArr = [{
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
},
{
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
},
{
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
},
{
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
},
{
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
},
{
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
},
{
    name: 'Максим',
    surname: 'Меженский',
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
},
{
    name: 'Денис',
    surname: 'Марченко',
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
},
{
    name: 'Антон',
    surname: 'Завадский',
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3
},
{
    name: 'Игорь',
    surname: 'Куштым',
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
},
{
    name: 'Инна',
    surname: 'Скакунова',
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
},
];

let idCounter = 1;

class Student {
    static listOfStudents = [];
    constructor(enrollee) {
        this.id = idCounter++;  ////или array.lenght !!!

        if (sortByRating && enrollee.ratingPoint >= 800) {
            this.isSelfPayment = false;
        }
        else {
            this.isSelfPayment = true;
        }
        
        Object.entries(enrollee).forEach(([key, value]) => {
            this[key] = value;
        })
        
        let lOfStud = Student.listOfStudents.push(this);

        function sortByRating (lOfStud) {
            lOfStud = lOfStud.sort((a, b) => a.ratingPoint - b.ratingPoint);
            let countOfRating = 0
            for (let entry of lOfStud) {
                countOfRating++;
                if (countOfRating <= lOfStud.length-5 || entry.ratingPoint < 800){
                    entry.isSelfPayment = true;
                }
                else {
                    entry.isSelfPayment = false;
                }
            }
            // lOfStud = lOfStud.sort((a, b) => a.id - b.id);
            return lOfStud;
        };
        sortByRating(Student.listOfStudents);
    }
}

new Student(studentArr[0]);
console.log(Student.listOfStudents);
new Student(studentArr[1]);
console.log(Student.listOfStudents);
new Student(studentArr[2]);
console.log(Student.listOfStudents);
new Student(studentArr[3]);
console.log(Student.listOfStudents);
new Student(studentArr[4]);
console.log(Student.listOfStudents);
new Student(studentArr[5]);
console.log(Student.listOfStudents);
new Student(studentArr[6]);
console.log(Student.listOfStudents);
new Student(studentArr[7]);
console.log(Student.listOfStudents);
new Student(studentArr[8]);
console.log(Student.listOfStudents);
new Student(studentArr[9]);
console.log(Student.listOfStudents);
new Student(studentArr[10]);
console.log(Student.listOfStudents);



//// _________________________02_________________________
//// Реализуйте класс CustomString, который будет иметь следующие методы: метод reverse(), 
//// который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), 
//// который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной 
//// и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
//// const myString = new CustomString();
//// myString.reverse('qwerty'); //выведет 'ytrewq'
//// myString.ucFirst('qwerty'); //выведет 'Qwerty'
//// myString.ucWords('qwerty qwerty qwerty'); //выведет 'Qwerty Qwerty Qwerty

console.log("************** 2nd ***************");
let originText = "зубов бояться - в лес не ходить"
console.log(`Origin text: ${originText}`);

class CustomString {
    reverse(someString) {
        //// First option:
        // let reversedStringArray = [...someString].reverse().join().replaceAll(",", "");
        // console.log(`Метод reverse(): ${reversedStringArray}`);
        // return reversedStringArray;
        //// End First option:

        //// Second option:
        // let reversedStringArray = [];
        // let someStringArray = [...someString];

        // for (let i = someStringArray.length - 1; i >= 0; i--) {
        //     reversedStringArray.push(someStringArray[i]);
        // }

        // reversedStringArray = reversedStringArray.toString().replaceAll(",", "");

        // console.log(`Метод reverse(): ${reversedStringArray}`);
        // return reversedStringArray;
        //// End Second option:

        //// Third option:
        let reversedString = "";
        for (let i = someString.length - 1; i >= 0; i--) {
            reversedString += someString[i];
        }
        console.log(`Метод reverse(): ${reversedString}`);
        return reversedString;
        //// End Third option:
    }

    ucFirst(someString) {
        let someStringArray = [...someString];
        someStringArray = someStringArray[0].toUpperCase() + someStringArray.slice(1);
        console.log(`Метод ucFirst(): ${someStringArray}`.replaceAll(",", ""));
        return someStringArray;
    }

    ucWords(someString) {
        //// First option:
        let someStringArray = someString.split(" ").map(word => word[0].toUpperCase() + word.substring(1)).join(" ");
        console.log(`Метод ucWords(): ${someStringArray}`);
        return someStringArray;
        //// End First option:

        //// Second option: НЕ РАБОТАЕТ ?????????????????????????????????????????????????????????????????????????????????????
        // const pattern = "()\w+/g"; //
        // const words = originText.match(pattern);
        // words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
        // console.log(`Метод reverse(): ${words}`);
        // return words;
        //// End Second option:
    }
}

const newStringOne = new CustomString();
newStringOne.reverse(originText);
newStringOne.ucFirst(originText);
newStringOne.ucWords(originText);



//// _________________________03_________________________

//// Реализуйте класс Validator, который будет проверять строки. 
//// К примеру, у него будет метод checkIsEmail() параметром принимает строку и проверяет, 
//// является ли она емейлом или нет. Если является - возвращает true, если не является - то false. 
//// Кроме того, класс будет иметь следующие методы: метод checkIsDomain для проверки домена, 
//// метод checkIsDate для проверки даты и метод checkIsPhone для проверки телефона:
//// var validator = new Validator();
//// validator.checkIsEmail('vasya.pupkin@gmail.com'); // true
//// validator.checkIsDomain('google.com'); // true
//// validator.checkIsDate('30.11.2019'); // true
//// validator.checkIsPhone('+38 (066) 937-99-92'); // если код страны Украинский, то возвращаем true иначе false

console.log("************** 3rd ***************");
console.log("NOT DONE");



























// regex101
// regexr.com
// const words = new RegExp("/b");
// words.exec("qwerty");
// let perf = performance.now();



// let str = "привет как дела";
// const people1 = [...str];
// console.log(people1);


// str.split(" ").reverse;
// console.log(str);
// let str2 = str;

// const users = ["Tom", "Sam", "Bob"];





// console.log ("************** 6th ***************");
// let reverseTestArray1 = [1, 2, 3, 4, 5];
// let reverseTestArray2 = "привет как дела"; 

// function reverseArray(someArray) {
//     let reversedArray = [];

//     for (let i = someArray.length-1; i >= 0; i--) {
//         reversedArray.push(someArray[i]);
//     }
//     // console.log (reversedArray.toString().replaceAll(",", ""));
//     console.log (reversedArray.join(""));
// }

// reverseArray (reverseTestArray1);
// reverseArray (reverseTestArray2);

// // let reverseTestArray3 = reverseTestArray2.slice().split(" ").reverse().toString().replaceAll(",", " ");
// let reverseTestArray3 = reverseTestArray2.slice().split(" ").reverse().join(" ");
// console.log (reverseTestArray3);


//////////////////////////////////////////////////////////////////
// const string = 'word';

// // Option 1
// string.split('');

// // Option 2
// [...string];

// // Option 3
// Array.from(string);

// // Option 4
// Object.assign([], string);

// // Result:
// // ['w', 'o', 'r', 'd']
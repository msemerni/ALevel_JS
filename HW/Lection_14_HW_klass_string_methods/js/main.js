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
    #isSelfPayment;
    constructor(enrollee) {

        this.id = idCounter++;  //или array.lenght !!!
        Object.entities(enrollee).forEach(([key, value]) => {
            // if (key) {
            //     case: "isSelfPayment":

            //     this.
            // }
            this[key] = value;
        })
    }

или геттер или в конструкторе ифами


    get isSelfPayment() {           // ??
        return this.#isSelfPayment;
    }
    set isSelfPayment() {     // ??
        if (ratingPoint >= 800 && func123) {
            this.#isSelfPayment = false;
        }
    }
    func123 
    array.forEach(element => {
        проверяем весь массив
    });

    или counter++
 




    constructor(enrollee) {
        // this.id;
        this.id = idCounter++; // ??
        this.name = enrollee.name; // name ??
        this.surname = surname;
        this.ratingPoint = ratingPoint;
        this.schoolPoint = schoolPoint;
        this.isSelfPayment = isSelfPayment;
    }
    // get id() {                   // ??
    //     return this.id;
    // }
    // set id() {
    //     if (name) {
    //         this.id = idCounter++;
    //     }
    // }

    get isSelfPayment() {           // ??
        return this.isSelfPayment;
    }
    set isSelfPayment() {     // ??
        if (ratingPoint >= 800) {
            this.isSelfPayment = false;
        }
    }


}

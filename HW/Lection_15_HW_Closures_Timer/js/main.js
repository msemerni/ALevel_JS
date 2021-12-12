//// _________________________01_________________________
//// Напиши функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, 
//// при втором - суммирует переданый параметр с тем, что передали первый раз и тд. 
//// Запрещается использовать глобальные переменные как хранилище результатов счетчика.
//// counter(3) // 3
//// counter(5) // 8
//// counter(228) // 236

console.log("************** 1st ***************");

function adder () {
    let sum = 0;
    return function (number) {
        sum += number;
        console.log(`Counter: ${sum}`);
        return sum;
    }
}

let counter = adder();
// adder(100);  ??????????????????????????????????почему сразу нельзя вызвать, без присваивания let counter = ...??????????????????????????????????????????????
counter(3);
counter(5);
counter(228);

//// _________________________02_________________________
//// Создать функцию которая будет возвращать массив в котором будут лежать 
//// все значения - аргументы переданные в данную функцию. 
//// Но если мы ничего не передадим в параметрах, то массив очистится. 
//// Запрещается использовать глобальные переменные как хранилище значений.
//// getUpdatedArr(3) // [3]
//// getUpdatedArr(5) // [3, 5]
//// getUpdatedArr({name: 'Vasya'}) // [3, 5, {name: 'Vasya'}]
//// getUpdatedArr() // []
//// getUpdatedArr(4) // [4]

console.log("************** 2nd ***************");

function funcgetUpdatedArr () {
    let paramsArray = [];
    // return function (...params) {
        //// 1st option
        // if (params.length !== 0) {
        //     Object.entries(params).forEach(([key, value]) => {
        //         paramsArray.push(value);
        //     })
        // }
        // else {
        //     paramsArray = [];
        //     console.log("Array cleared");
        // }
        // console.log(`Elements in Array: ${paramsArray}`);
        // return paramsArray;

        //// 2nd option
    //     if (params.length !== 0) {
    //         for (index in params) {
    //             paramsArray.push(params[index]);
    //         }
    //     }
    //     else {
    //         // paramsArray.length = 0;
    //         paramsArray = [];
    //         console.log("Array cleared");
    //     }
    //     console.log(`Elements in Array: ${paramsArray}`);
    //     return paramsArray;
    // }

        //// 3rd option
    return function () {
        if (arguments.length !== 0) {
            for (const arg of arguments) {
                paramsArray.push(arg);
            }
        }
        else {
            paramsArray.length = 0;
            // paramsArray = [];
            console.log("Array cleared");
        }
        console.log(paramsArray);
        return paramsArray;
    }
}

let getUpdatedArr = funcgetUpdatedArr();
getUpdatedArr(3);
getUpdatedArr(5, 8);
getUpdatedArr({name: 'Vasya'});  ///// ?????????????????????? 1st и 2nd option выводит [object Object]????????????????????????????????????
getUpdatedArr();
getUpdatedArr(4);

//// _________________________03_________________________
//// Содать функцию , которая при каждом вызове будет показывать разницу в секундах между временем 
//// когда ее вызывали последний раз и теперешним. Вызываем первый раз, то ретерним строку 'Enabled'. 
//// Запрещается использовать глобальные переменные как хранилище значений. 
//// Запускаем первый раз
//// getTime() // 'Enabled'
//// Запускаем через 2 сек
//// getTime() // 2
//// Запускаем через 3 сек
//// getTime() // 3
//// Запускаем через 7 сек
//// getTime() // 7
//// Запускаем через 60 сек
//// getTime() // 60
//// Запускаем через 1 сек
//// getTime() // 1

console.log("************** 3rd ***************");

function countLastRun () {
    let lastRun = 0;
    return function () {

        let dTNow = Date.now();

        if (lastRun !== 0) {
            let runDifference = dTNow - lastRun;
            lastRun = dTNow;
            console.log(`Last run: ${Math.round(runDifference / 1000)} seconds ago`);
        }
        else {
            console.log(`Enabled`);
            lastRun = dTNow;
        }
    }
}

getTime = countLastRun();

getTime();
getTime();
// let timeoutId = setTimeout(getTime, 2000);
// clearTimeout(timeoutId);   ????????????????????????????????????? как сбросить таймер ?????????????????????????
// setTimeout(getTime, 3000);

//// _________________________04_________________________
//// Создать таймер обратного отсчета, который будет в console выодить время в формате MM:SS. 
//// Где MM - количество минут, SS - количество секунд. При этом когда закончится время, нужно вывести 
//// в console строку "Timer End".
//// const time = 60; 
//// const timer = time => {
////    ...Your code
////}
//// Вариант если время минута или больше
//// timer(120) // в аргументе передаем кол-во секунд
//// 02:00
//// 00:59
//// 00:58
////...
//// 00:01
//// Time End
//// Вариант если время меньше минуты
//// timer(59) // в аргументе передаем кол-во секунд
//// 00:59
//// 00:58
//// 00:57
//// ...
//// 00:01
//// Time End

console.log("************** 4th ***************");

const timer = (time) => {
    let intervalID = setInterval( () => {
        let minutes = parseInt(time / 60);
        let seconds = time % 60;

        if (time === 0) {
            clearInterval(intervalID);
            printTime();
            console.log("Timer End");
            return;
        }

        printTime();
        time--;

        function printTime() {
            console.clear();
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            console.log(`${minutes}:${seconds}`);
        }
    }, 1000);
}

timer(65);
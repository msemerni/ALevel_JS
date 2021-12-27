

// const promoButton = document.getElementById("promoButton");
// const promoText = document.getElementById("promoText");

// promoButton.addEventListener("click", getBonus);

// function getBonus() {
//     let promoNumber = +promoText.value;
//     let allDigits = [];
//     let evenSum = 0;
//     let oddSum = 0;

//     if (((promoNumber ^ 0) === promoNumber) && (promoText.value.length === 8)) {

//     /////////////// 100 ////////////////

//         for (let i = 7; i >= 0; i--) {
//             allDigits[i] = parseInt(promoNumber % 10);
//             promoNumber /= 10;

//             if(allDigits[i] % 2 === 0) {
//                 evenSum += allDigits[i];
//             }
//             else {
//                 oddSum += allDigits[i];
//             }
//         }
//         if (evenSum > oddSum) {
//             console.log("Бонус 100 грн. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//             // return 100;
//         }
//     /////////////// End 100 ////////////////

//         console.log(allDigits); ////
//         console.log(`Even sum: ${evenSum}`); ////
//         console.log(`Odd sum: ${oddSum}`); ////

// /////////////////////////////////////////////////////////////////

// // let pairs = [];
    
// // for (let i = 0; i < allDigits.length - 1; i++) {
// //     pairs[i] = allDigits[i] * 10 + allDigits[i+1]

// // }
// // console.log("All pairs:");
// // console.log(pairs);

// /////////////// ALL ////////////////
// let oddPairs = [];
// let counter = 0;
// let isEvenBetween = false;


// for (let i = 0; i < allDigits.length - 1; i++) {        

//     if ( (allDigits[i] % 2 !== 0 && allDigits[i+1] % 2 !== 0)  ) {
//         counter++;
//         console.log(allDigits[i] * 10 + allDigits[i+1]);
//         // if(isEvenBetween && counter > 1){
//         oddPairs.push(allDigits[i] * 10 + allDigits[i+1]);

//             // console.log("Бонус 1000 грн. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//         }

//     // }
    
//     // if (allDigits[i] % 2 === 0 && counter >= 1){
//     if (allDigits[i] % 2 === 0){
//         isEvenBetween = true;
//         oddPairs.push(allDigits[i]);

//         // console.log(allDigits[i]);

//     }
//     if ((allDigits[i] % 2 !== 0 && (allDigits[i-1] % 2 === 0) && allDigits[i+1] % 2 === 0)) {
//         oddPairs.push(allDigits[i]);
        
//     }
    
// /////////////////// 1000 /////////////////////
//     let isCorrect = true;
//     // let pairsCounter = 0

//     for (let i = 0; i < oddPairs.length; i++) {
//         if (oddPairs[i] / 10 > 1 ) {  //если двузначное
//             // pairsCounter++;

//         for (let j = 1; j < oddPairs.length; j++) {
//                 if ( ((oddPairs[j] % 2 !== 0) && (oddPairs[j] / 10 <= 1 )) )  { // если след НЧТН и однозначное
//                     isCorrect = false;
//                     console.log("Hi")
//                     // return;
//                 }
//             }
            
//         }
        
//     }
    

//     if (isCorrect) {
//         oddPairs.forEach(num => {
//             if( (parseInt(num / 10) >= 1)) {
//                 if ( (parseInt(num / 10)) > (num % 10) ) {
//                     console.log("1000 грн. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//                     // return 1000;
//                 }
//                 else{
//                     console.log("2000 грн. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//                     // return 2000;
//                 }
//             }
//         })
//     }
//     else {
//         console.log("Wrong");
//     }
//     console.log("Odd pairs:");
//     console.log(oddPairs);
// ////////////////////////////////////////

    

// }
// // if  (allDigits[6] % 2 !== 0 && allDigits[7] % 2 !== 0) {
// //     oddPairs.push(allDigits[6] * 10 + allDigits[7]);
// // }

// // console.log(counter);


// /////////////////////////////////////////
 

//     }
//     else {
//         console.log("Промокод не действительный");
//         return 0;
//     };

// };



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////



//             ///////////////////////////////

//             // let twoThoursand = oddPairs.forEach(number => {
//             //     if((parseInt(number / 10)) < (number % 10)){
//             //     console.log(parseInt(number / 10));
//             //     console.log(number % 10);

//             //     console.log("Бонус 2000 грн. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//             //     // console.log(twoThoursand);

//             //     }
//             //     else{
//             //         return;
//             //     }
//             // })
//             ///////////////////////////////

//             ////////////////////////////////////////
// // let resultPairs = [];

// //         let counter2 = 0;
// //         let counterBool = true;

// //         for (let i = 0; i < oddPairs.length - 1; i++) {
// //             if  (oddPairs[i] % 2 === 0)  {
// //                 if ( (!(oddPairs[i-1] % 2 !== 0)) &&
// //                     (!(oddPairs[i+1] % 2 !== 0) || !(oddPairs[i+1] % 2 === 0)) ) 
                    
// //                 {
// //                     resultPairs.push(oddPairs[i]);
// //                     counter2++;

// //                 }
                    
                
// //             }
// //             else {
// //                 console.log(`Total: ${counter2}`);

// //             }
// //         }
// //////////////////////////////////////////    
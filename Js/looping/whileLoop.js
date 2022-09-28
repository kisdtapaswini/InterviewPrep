/**Number is prime or not using while loop */
// function numberWithSquares(num) {
//     let i = 1;
//     let count = 1;
//     if (num === 0 || num === 1) {
//         return 'not prime';
//     }
//     while (i < num) {
//         if (num % i === 0) {
//             count++;
//         }
//         i++;

//     }
//     if (count == 2) {
//         return 'number  is prime';

//     } else {
//         return 'number is not prime';
//     }

// }
// console.log(numberWithSquares(67));
//--------------------Ends-------------------------

/***
 * Find the sum of all digits 
 */
// function findSumOfDigits(num) {
//     let Sum = 0;
//     let product = 1;
//     while (num != 0) {
//         let digit = (num % 10);
//         num = parseInt(num / 10);
//         Sum += digit;
//         product *= digit;
//     }
//     return {
//         Sum,
//         product
//     };
// }
// console.log(findSumOfDigits(234));

//--------------------Ends-------------------------

/**
 * Reverse the number accepted from user
 * 
 */

// function reverseNumber(num) {
//     let reverseNum = 0;
//     while (num !== 0) {
//         reverseNum = (reverseNum * 10) + (num % 10);
//         num = parseInt(num / 10);
//     }

//     return reverseNum;
// }
// console.log(reverseNumber(123));

//--------------Ends here--------

/**
 * Display the numbe names
 */
// function displayDigitName(num) {
//     let name = '';
//     let reverseNum = 0;
//     while (num != 0) {
//         reverseNum = (reverseNum * 10) + (num % 10);
//         num = parseInt(num / 10);
//     }
//     while (reverseNum != 0) {
//         let digit = reverseNum % 10;
//         reverseNum = parseInt(reverseNum / 10);
//         if (digit === 1) {
//             name = name + " One";
//         } else if (digit === 2) {
//             name = name + " Two";
//         } else if (digit === 3) {
//             name = name + " Three";
//         }
//     }
//     return name;
// }
// console.log(displayDigitName(211));

//-----------------------ends-------------------
/**
 * Print the Fibonacci series till n terms
 */
// function printFibonacciSeries(n) {

//     if (n === 1) {
//         console.log(1);
//     } else {
//         let prev = 1;
//         let next = 1;
//         console.log(prev);
//         console.log(next);
//         let fib = 1;
//         while (fib < n) {
//             fib = prev + next;
//             prev = next;
//             next = fib;
//             console.log(fib);

//         }
//     }
// }
// console.log(printFibonacciSeries(13));
//--------------------ends------------
/**
 * Print factorial of a user input number
 */
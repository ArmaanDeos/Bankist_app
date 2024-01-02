// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

/* -------------------------------------------------------------------------- */
/*                              // ! Slice Method                             */
/* -------------------------------------------------------------------------- */
// ? slice method - with slice method we can extract any part of an array without changes to original array.
// console.log(arr.slice(2)); // this can not mutate original array its return a new array.
// console.log(arr.slice(2, 5));
// console.log(arr.slice(-1)); // extract last element from the array.
// console.log(arr.slice(1, -2));
// ? we use it to make a copy of an array.
// console.log(arr.slice());
// console.log([...arr]);

/* -------------------------------------------------------------------------- */
/*                             // ! Splice Method                             */
/* -------------------------------------------------------------------------- */
// ? Its work same like slice method but fundamental difference is that it changes the original array.It mutate original array.

// console.log(arr.splice(2)); // ['c', 'd', 'e', 'f']
// console.log(arr); // ['a', 'b'];
// above output show that splice does mutate the original array.Its take that parts of elements and remaining are in original array.

// console.log(arr.splice(-1)); // ['f'] // deletes last elements from an array.
// console.log(arr); // ['a', 'b', 'c', 'd', 'e']
// arr.splice(1, 2);
// console.log(arr);

/* -------------------------------------------------------------------------- */
/*                             // ! Reverse Method                            */
/* -------------------------------------------------------------------------- */
arr = ['a', 'b', 'c', 'd', 'e', 'f'];
const arr_2 = ['k', 'j', 'i', 'h', 'g'];
console.log(arr_2.reverse()); //  ['f', 'g', 'h', 'i', 'j']
// console.log(arr_2); // ['f', 'g', 'h', 'i', 'j']
// Above output show that reverse method also mutate the original array.

/* -------------------------------------------------------------------------- */
/*                             // ! Concat Method                             */
/* -------------------------------------------------------------------------- */
// ? The concat() method concatenates (joins) two or more arrays.The concat() method returns a new array, containing the joined arrays.The concat() method does not change the existing arrays.

const joinArray = arr.concat(arr_2);
// console.log(joinArray); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
// console.log([...arr, ...arr_2]); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']

/* -------------------------------------------------------------------------- */
/*                              // ! Join Method                              */
/* -------------------------------------------------------------------------- */
// ? The join() method returns an array as a string.The join() method does not change the original array.

// console.log(joinArray.join(' - ')); // a - b - c - d - e - f - g - h - i - j - k

/* -------------------------------------------------------------------------- */
/*                               // ! At Method                               */
/* -------------------------------------------------------------------------- */
// ? The at() method returns an indexed element from an array.

const dummyArr = [23, 45, 89, 10, 11];
// console.log(dummyArr[1]); // 45
// console.log(dummyArr.at(0)); // 23  (es-20 method)

// suppose we don't know length of an array and we take out last element from it.
// console.log(dummyArr[dummyArr.length - 1]); // method 1 (11)
// console.log(dummyArr.splice(-1)[0]); // method 2 (11)
// console.log(dummyArr.at(-1)); // method 3 (11)

// at method works on string also
// console.log('object'.at(0)); // o
// console.log('object'.at(1)); // t

/* -------------------------------------------------------------------------- */
/*                       // ! Looping Arrays : forEach()                      */
/* -------------------------------------------------------------------------- */

const money = [200, 450, -400, 3000, -650, -130, 70, 1300];
// positive values - deposit
// negative values - withdraw

// ? forOf loop
// for (const movement of money) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}`);
//   }
// }
/*
You deposited 200
 You deposited 450
 You withdraw 400
 You deposited 3000
 You withdraw 650
 You withdraw 130
 You deposited 70
 You deposited 1300 */

//  ? forEach() The forEach() method calls a function for each element in an array.The forEach() method is not executed for empty elements.

// money.forEach(function (mov, i, arr) {
//   // (current arguments, current index, current array)
//   if (mov > 0) {
//     console.log(`Movement: ${i + 1} You deposited ${mov}`);
//   } else {
//     console.log(`Movement: ${i + 1} You withdraw ${Math.abs(mov)}`);
//   }
// });

/*
Movement: 1 You deposited 200
 Movement: 2 You deposited 450
 Movement: 3 You withdraw 400
 Movement: 4 You deposited 3000
 Movement: 5 You withdraw 650
 Movement: 6 You withdraw 130
 Movement: 7 You deposited 70
 Movement: 8 You deposited 1300
*/

// ? forEach is technically a higher order function which require call back function in order to tell it what to do.

/* -------------------------------------------------------------------------- */
/*                      // ! forEach with maps and sets:                      */
/* -------------------------------------------------------------------------- */

/* --------------------------------- // map --------------------------------- */
const new_currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

new_currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});
/*
USD : United States dollar
EUR : Euro
118 GBP : Pound sterling
*/

/* --------------------------------- // set --------------------------------- */
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // {'USD', 'GBP', 'EUR'}  // unique values

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value} : ${value}`);
});

// _ in js it means thorwable variable means unessarry varialbe.

/*
USD : USD
GBP : GBP
EUR : EUR
here key and value both are same bcz set does not have keys its does't have index also.
*/

/* -------------------------------------------------------------------------- */
/*             // ! Data Transformations : Map, Filter , Reduce -             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                               // ! Map method                              */
/* -------------------------------------------------------------------------- */
/*
?map() creates a new array from calling a function for every array element.

?map() does not execute the function for empty elements.

?map() does not change the original array.

Note : map returns a new array containing the result of applying an operation on all original array elements
*/

// const money = [200, 450, -400, 3000, -650, -130, 70, 1300];

const USD = 81.1;
// const usdMoney = money.map(function (mon) {
//   return mon * USD;
// });
// console.log(money);
// console.log(usdMoney);

// ?Arrow function
const usdMoney = money.map(mon => mon * USD);
// console.log(money);
// console.log(usdMoney);

// ?Method 1
// const transactionDetails = money.map((mon, i, arr) => {
//   if (mon > 0) {
//     return `Transaction ${i + 1} : You Deposited ${mon}`;
//   } else {
//     return `Transaction ${i + 1} : You Withdraw ${mon}`;
//   }
// });
// console.log(transactionDetails);
// ?Method 2
const transactionDetails = money.map((mon, i) => {
  return `Transaction ${i + 1} : You ${
    mon > 0 ? 'Deposited' : 'Withdraw'
  } ${Math.abs(mon)}`;
});
console.log(transactionDetails);

// forOf
const usdMoneyFor = [];
for (const mov of money) {
  usdMoneyFor.push(mov * USD);
}
// console.log(usdMoneyFor);

/* -------------------------------------------------------------------------- */
/*                             // ! Filter method                             */
/* -------------------------------------------------------------------------- */
/*
?The filter() method creates a new array filled with elements that pass a test provided by a function.

?The filter() method does not execute the function for empty elements.

?The filter() method does not change the original array.

Note : filter returns a new array containing the array elements that passed a specified test condition
*/

// const money = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = money.filter(function (mon) {
  return mon > 0;
});
console.log(money);
console.log(deposits);

const withdrawal = money.filter(function (mon) {
  return mon < 0;
});
console.log(withdrawal);

// forOf
const depositFor = [];
for (const mon of money) {
  if (mon > 0) depositFor.push(mon);
}
console.log(depositFor);

/* -------------------------------------------------------------------------- */
/*                             // ! Reduce method                             */
/* -------------------------------------------------------------------------- */
/*
?The reduce() method executes a reducer function for array element.

?The reduce() method returns a single value: the function's accumulated result. 

?The reduce() method does not execute the function for empty array elements.

?The reduce() method does not change the original array.

Note : reduce boils (reduces) all array elements down to one single value (e.g adding all elements together)

*/

// const money = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator
const totalBalance = money.reduce(function (acc, cur, i) {
  console.log(`Iteration : ${i} : ${acc}`);
  return acc + cur;
}, 0);

console.log(totalBalance);
/*
Iteration : 0 : 0
Iteration : 1 : 200
Iteration : 2 : 650
Iteration : 3 : 250
Iteration : 4 : 3250
Iteration : 5 : 2600
Iteration : 6 : 2470
Iteration : 7 : 2540
3840
*/

/* ---------------------------------  using forLoop -------------------------------- */
// first we declare accumalator value
let balanceFor = 0;
for (let mon of money) balanceFor += mon;
console.log(`Result : ${balanceFor}`);

// ! Maximum value

// const money = [200, 450, -400, 3000, -650, -130, 70, 1300];

const maxValue = money.reduce((acc, mon) => {
  if (acc > mon) return acc;
  else return mon;
}, money[0]);
console.log(`MaxValue : ${maxValue}`);

/* -------------------------------------------------------------------------- */
/*                                     Coding Challenge                       */
/* -------------------------------------------------------------------------- */
/*
let's go back to Julia and Kate's study about dogs.This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dogs ages ('ages') , and does the following things in order:
1. Calculate the dog age in human years using the following formula : if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge *4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs ( you should already know from other challenges how we calculate averages)

4. Run the function for both test datasets 
 TEST DATA 1 : [5,2,4,1,15,8,3]
 TEST DATA 2 : [16,6,10,5,6,1,4]

*/

const calcAverageHumanAge = function (ages) {
  const human = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  // console.log(human);
  const adults = human.filter(age => age >= 18);
  // console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  // console.log(average);
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

/* -------------------------------------------------------------------------- */
/*                     The Magic of CHAINING METHOD'S                         */
/* -------------------------------------------------------------------------- */

// Change total Deposit into Rupee.

// const money = [200, 450, -400, 3000, -650, -130, 70, 1300];
// positive values - deposit
// negative values - withdraw

let INR_Rate = 81.1;
// PIPELINE
const totalDepositsUSD =
  // filter out the deposit array from money
  // map - iterate filtered array and change to usd
  // reduce - one all changes to usd then take sum
  money
    .filter(mon => mon > 0)
    .map(mon => mon * INR_Rate)
    .reduce((acc, mon) => acc + mon, 0);

console.log(totalDepositsUSD);

/* -------------------------------------------------------------------------- */
/*                                 Find Method                                */
/* -------------------------------------------------------------------------- */
// We can use find method to retrieve one element from array based on some condition.
// Note : find method is similar to filter method but difference i.e 1.filter method retuns all the elements that match the condition while find method return only one element. 2.filter method gives a new array while find give only element itself not an array.

// const money = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdraw = money.find(mon => mon < 0); // negative value
console.log(firstWithdraw); // -400
const firstDeposit = money.find(mon => mon > 0);
console.log(firstDeposit); // 200

const account1 = {
  owner: 'Armaan Ahmad',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const accounts = [account1, account2, account3, account4];

console.log(accounts);

const findAccountWithName = accounts.find(acc => acc.owner === 'Sarah Smith');
console.log(findAccountWithName);

/* -------------------------------------------------------------------------- */
/*                              FindIndex Method                              */
/* -------------------------------------------------------------------------- */

// It works same as find method but its on give the element index not element.
// Note: to delete an element from an array we use splice methods.

/* -------------------------------------------------------------------------- */
/*                            Some and Every Method                           */
/* -------------------------------------------------------------------------- */

// const money = [200, 450, -400, 3000, -650, -130, 70, 1300];

// ? Used for Equality
console.log(money.includes(-130));
// Note: includes method is use to check that if the value is present in an array or not.
// includes return true if -130 is present in given array if it is not then its return false.

// ? User for Condition (some method)
// it work same as includes method but its check the condition if codition match its return true or false.

const depositAmmount = money.some(mon => mon > 1500);
console.log(depositAmmount);
console.log(money);

// ? Every Method : its return only true if all of the element in array satisfied the condition.
console.log(money.every(mon => mon > 0)); // false
console.log(account4.movements.every(mon => mon > 0)); // true all the elements are in positive

// ? seperate callback
const deposite = mon => mon > 0;
console.log(money.some(deposite));
console.log(money.every(deposite));
console.log(money.filter(deposite));

/* -------------------------------------------------------------------------- */
/*                           Flat and FlatMap Method                          */
/* -------------------------------------------------------------------------- */

const newArr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
// es2019
console.log(newArr.flat());
// flap method is used to remove the nested array and make it to flatted array.

const newArrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8, 9]; // 2 level nested
console.log(newArrDeep.flat(2));

// take some real example

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
// take all movements into one array
const allMovements = accountMovements.flat();
console.log(allMovements);
// add all the elements into array
const addAllMovements = allMovements.reduce((acc, mov) => acc + mov);
console.log(addAllMovements);

// sort method (chainning)
const addAllMovements2 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);
console.log(addAllMovements2);

// flatMap - it combines flat method and map method together. its accepts same call back as map method.

const addAllMovements3 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov);
console.log(addAllMovements3);

/* -------------------------------------------------------------------------- */
/*                                Sorting Array's                             */
/* -------------------------------------------------------------------------- */

// Strings
const owners = ['Armaan', 'Hassan', 'Irshad', 'Sanu', 'Faizy'];
console.log(owners.sort());

// Numbers
console.log(money);
console.log(money.sort());

// Note : sort mutate actuall array, sort method does sorting based on string, basically it convert everything into strings then start sorting.

// asecending order
// money.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// or
money.sort((a, b) => a - b);
console.log(money);

// decending order
// money.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// or
money.sort((a, b) => b - a);
console.log(money);

/* -------------------------------------------------------------------------- */
/*                More ways of creating and filling an Array's                */
/* -------------------------------------------------------------------------- */

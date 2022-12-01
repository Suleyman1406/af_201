const myArray = [1, 2, 4, 4, 2];

// myArray.unshift(6)
// myArray.push(7)
// myArray.push(1,2,3,4);

// myArray.pop();
// myArray.shift();

// myArray.reverse()

// console.log(myArray.slice(0,2))

// myArray.splice(myArray.length/2,0,9);
// myArray.splice(myArray.length/2,0,10);

// let newArr = [6,7,8,9]

// console.log(myArray.concat(newArr))

// console.log(myArray.indexOf(3))
// console.log(myArray.lastIndexOf(3))

// console.log(myArray.includes(99));
/* Checking if the array includes the number 3. If it does, it will print "var" to the console. */
// if (myArray.includes(3)) {
//   console.log("var");
// }

// function myName (){

// }

// const myName = () => {

// }

// myArray.forEach(function () {});

// console.log(myArray.join("-"));

// let total = 0;

// console.log(
//   myArray.forEach((suse, idx, ary) => {
//     return suse + 1;
//   })
// );

// console.log(total);
// console.log(
//   myArray.map((item, idx) => {
//     return item + 1;
//   })
// );

// let myNewArr = myArray.map((item, idx, arr) => {
//   if (item % 2 === 0) {
//     return item;
//   }
// });

// let sum = (a,b)=>a+b;

// let newArry = myArray.filter(item => item % 2 === 0);

// console.log(
//   myArray.every((item) => {
//     return item % 2 === 0;
//   })
// );

// console.log(
//   myArray.some((item) => {
//     return item % 2 === 1;
//   })
// );

// console.log(
//   myArray.find((item, idx) => {
//     if (idx < 3) return false;
//     return item % 2 === 0;
//   })
// );

console.log(
  myArray.findIndex((item, idx) => {
    if (idx < 5) return false;
    return item % 2 === 0;
  })
);

console.log(myArray);

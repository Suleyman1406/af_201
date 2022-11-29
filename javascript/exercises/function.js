// function perimetr(en,uzunlug){
//   return (en+uzunlug)*2
// }
// perimetr(2,3)

// // function (length,weight){
// //   let perimetr = 2*()
// // }

// function bodyMass  (height,weight){
//   let bmi = weight /(height*height);
//   return bmi
// }

// function check (bmi){
//   if(bmi>30)
//     console.log('obese')
//   else if(bmi<29.9 && bmi>25)
//     console.log('overweight')
//   else if(bmi<24.9 && bmi>18.5)
//     console.log('normal weight')
//   else if(bmi<18.5)
//     console.log('underweight')
// }
// console.log(check(1.52,60))

// function bmi(weight, height) {
//   let bmi = weight / (height * height);
//   if (bmi < 18.5) {
//     return "underweight";
//   } else if (bmi < 24.19) {
//     return "normal weight";
//   } else if (bmi < 29.9) {
//     return "overweight";
//   } else return "obese";
// }

// console.log(bmi(60, 1.62));

// function bmi2(weight, height) {
//   let bmi = weight / (height * height);
//   if (bmi < 18.5) {
//     console.log("underweight");
//   } else if (bmi < 24.19) {
//     console.log("normal weight");
//   } else if (bmi < 29.9) {
//     console.log("overweight");
//   } else console.log("obese");

//   return bmi;
// }

// bmi2(60, 1.62);

// let findMax = (num1, num2, num3) => {
//   let max = num1;
//   if(num2> num3 && num2>num1){
//     max = num2
//   }else if(num3>num2 && num3>num1){
//     max=num3
//   }
//   return max;
// };

// findMax()=>(num1,num2,num3)=>{
//   if(num1>num2 && num1>num3)
//   return num1
// }

// let findMaxInArr = (...arr) => {
// console.log(arr);
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// return max;
// };

// findMaxInArr(73, 62, 213, 123, 213213);

// function reverseArray(arr) {
// let start = 0;
// let end = array.length - 1;
// while (start < end) {
//   let temp = array[start];
//   array[start] = array[end];
//   array[end] = temp;
//   start++;
//   end--;
// }

// for (let i = 0; i < arr.length / 2; i++) {
//   let temp = arr[i];
//   arr[i] = arr[arr.length - i - 1];
//   arr[arr.length - i - 1] = temp;
// }

// return arr;
// }

// console.log(reverseArray([1, 2, 3, 123, 8, 12]));

// function pow(a, b) {
//   return Math.pow(a, b);
// }

// console.log(Array.isArray("salam"));

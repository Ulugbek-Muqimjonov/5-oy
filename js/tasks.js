
// birinchi masala

// const arr = [1,2,3,4,5];
// const add = arr.reduce((total,item) => {
//     total  += item * (item-1);
//     return total;
// },0)
// console.log(add);


// 2-masala

// let str = "40R503abC";

// function toUpperCaseFromTloverCase(arr) {
//     const upperCase = [];
//     const lowerCase = [];
//     const numbers = [];
//     let rezult = [];
//     for (let index = 0; index < arr.length; index++) {

//         if ( 65 <= arr[index].charCodeAt() && arr[index].charCodeAt() <= 90 ) {
//             // console.log(str[index]);
//             upperCase.push(arr[index])
//         }
//         if (97 <= arr[index].charCodeAt() && arr[index].charCodeAt() <= 122) {
//             lowerCase.push(arr[index]);
//         }
//         if (48 <= arr[index].charCodeAt() && arr[index].charCodeAt() <= 57) {
//             numbers.push(arr[index]);
//         }  
//     }
//     rezult = upperCase.concat(lowerCase).concat(numbers);
//     console.log(rezult.join(""));
// }
// toUpperCaseFromTloverCase(str)



// 3-masala

// const num =prompt("sonni kiriting");
// const arr =[];
// function reverse(array) {
//     for (let index = 0; index < array.length; index++) {
//         arr.push(array[index])
//     }
//     // bu joyda arayni revers qilib ,join qilib keyin biz kiritgan raqamga concat qildim va number typega o'girdim

//      const result = Number(arr.reverse().join("").concat(num));
//      console.log(result);
// }
//  reverse(num);

// 4-masala

// const users = {
//     Emma:71,
//     Jack:45,
//     Amy:105,
//     Ben:29
// }

// function findOlderst(obj)  {
//     let olduser = 0;
//     for (const key in obj) {
//         if (olduser < obj[key]) {
//             olduser = obj[key]
//         }
//     }
//     console.log(olduser);
// }
// findOlderst(users)


// 5-masala

// const arr = ["a","d","c"];

// const newobj = arr.map(item => {
//    const obj =  {}    
//     obj[item]  = item.toUpperCase()
//     return obj;
// })  
// console.log(newobj);

// 6-masala

// const str = "John000Doe000123";
// const name ="";
// const fullname ="";
// for (let index = 0; index < array.length; index++) {
//     name  =name.concat(str[index]);
    
// }
// console.log(name);


// 7-masala

// const  array = [5,415,12,23,56,98,7,1000,45];
// const result = [];
// function minmax(arr) {
//     arr.sort((a,b) => {
//         return a-b;
//     })
//     let min = arr.shift();
//     let max = arr.pop();
//     result.push(min);
//     result.push(max);
//   console.log(result);
// }

// minmax(array)
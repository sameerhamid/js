const myArr = [1, 2, 3, 4, 5]

// console.log(myArr[0]);

const heros = ["superman", "batman"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr2);

// array methods 

// myArr.push(3)
// myArr.pop()

// myArr.unshift(0) /**----inserts an element in front of the array */
// // myArr.shift()     /**----Delets an element in front of the array */
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));
// console.log(myArr);

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice and splice 

console.log("A ", myArr);

const myN1 = myArr.slice(1, 3)

console.log("slice ", myN1);
console.log("After slice ", myArr);


const myN2 = myArr.splice(1, 3)

console.log("splice ", myN2);

console.log("After splice ", myArr);


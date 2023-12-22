// const tinderUser = new Object()

// const tinderUser = {}

// tinderUser.id = '1231bc'
// tinderUser.name = "sam",
//   tinderUser.logedIn = false

// console.log(tinderUser);

// const regularUser = {
//   email: 'something@gmail.com',
//   fullName: {
//     firstName: 'sameer',
//     lastName: 'Ahanger'
//   }
// }

// console.log(regularUser.fullName.firstName);

const obj1 = { 1: "a", 2: 'b' }

const obj2 = { 3: 'a', 4: 'b' }
const obj3 = Object.assign({}, obj1, obj2)
// const obj3 = { ...obj1, ...obj2 }

// console.log(obj3);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

console.log(obj1.hasOwnProperty("1"));
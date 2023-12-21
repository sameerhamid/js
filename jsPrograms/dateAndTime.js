let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 2)
// let myCreatedDate = new Date("2023-08-14")
let myCreatedDate = new Date("01-08-2023")

// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleDateString('default', {
  weekday: 'long',
}));

// singleton

// object literals


const mySym = Symbol("key1")

const jsUsr = {
    name: 'Sameer',
    age: 22,
    [mySym]: "myKey1",
    city: "New York",
    email: "sameer@gmail.com",
    isLogedIn: false,
    lostLoginDays: ["Monday", "Saturday"],
    greeting: function () {
        console.log("welcome", this.name);
    }
}

console.log(jsUsr.name);

console.log(jsUsr["email"]);
console.log(jsUsr[mySym]);

jsUsr.email = "sameerhamid@gmail.com"

console.log(jsUsr);

Object.freeze(jsUsr)

jsUsr.age = 33

console.log(jsUsr.age);

jsUsr.greeting()
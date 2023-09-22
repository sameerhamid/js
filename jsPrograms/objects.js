// singleton
// Object.create()

// object litrals


const mySym = Symbol('key1')

const userDetails={
    id:1,
    name:'sameer',
    'full name':'sameer ahmad ahanger',
    [mySym]:'myKey1',
    age:20,
    location:'wasoora',
    email:'sameer@gmail.com',
    isLoggedIn:false,
    lastLoginDays:['Monday','Friday'],

}

// console.log(userDetails.email);
// console.log(userDetails["full name"]);
// console.log(userDetails['email']);
// console.log(userDetails[mySym]);

// Object.freeze(userDetails)

// userDetails.email = 'sameer@google.com'

userDetails.greetings = function(){
    console.log('welcome user');
}

userDetails.greetingSec = function(){
    console.log(`Hello user ${this.name}`);
}

// userDetails.greetingSec = ()=>{
//     console.log(`Hello user ${this.name}`); /*it will print undefined bcoz of the arrow function*/
// }
// const something =()=>{
//     console.log('something');
//     // return 1;
// }


// console.log(something());
// console.log(userDetails.greetings());
userDetails.greetings();

userDetails.greetingSec()


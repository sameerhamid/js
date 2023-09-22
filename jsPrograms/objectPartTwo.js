const tinderUser = new Object()

tinderUser.id = 1
tinderUser.name = 'sam'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:'something@gmail.com',
    fullName:{
        firstName:'Sameer',
        middleName:'Ahamad',
        lastName:'Ahanger'
    }
}

console.log(regularUser.fullName.firstName);
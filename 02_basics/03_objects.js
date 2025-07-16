//* object literals

const mySym = Symbol('key1');

const jsUser = {
    name: 'John',
    'full name': 'John Doe',
    [mySym]: 'myKey1',
    age: 25,
    location: 'New York',
    email: 'johnDoe@gmail.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}

//console.log(jsUser.name);
//console.log(jsUser);

jsUser.greetings = function () {
    console.log(`Hello, ${this.name}!!`);
}
// jsUser.greetings();

jsUser.Greet = function (greeting) {
    if (!greeting) {
        console.log('Please provide a greeting');
        return;
    }
    return `${greeting}, ${this.name}!!`;
}
const greeting = jsUser.Greet('Hello');
console.log(greeting);
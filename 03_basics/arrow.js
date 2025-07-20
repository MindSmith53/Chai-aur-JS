const user = {
    name: 'John',
    age: 30,
    price: 100,
    welcome: function () {
        console.log(`Welcome ${this.name}`);
        // console.log(this);
    },
}
// user.welcome();
// console.log(this);

function name() {
    let username = 'John';
    console.log(this.username);
}
// name();

const name = function () {
    let username = 'John';
    console.log(this.username);
}
// console.log(name()); // undefined, as 'this' refers to the global object where 'username' is not defined

const name2 = () => {
    let username = 'John';
    console.log(this.username); // 'this' refers to the global object, not the function scope
    console.log(this); // 'this' is the global object in arrow functions

};
// name2(); // undefined, as 'this' does not refer to the function's lexical scope

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// };

const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(10, 20)); // 30

function sayMyName(name) {
    if (!name) {
        return 'Please provide a name';
    }
    return `Hello, ${name}!`;
}

let greeting = sayMyName('John'); // "Hello, John!"
// console.log(greeting);

function calculatePrice(...num1) {
    return num1;
}
let price = [100, 200, 300, 400];
let total = calculatePrice(...price);
// console.log(total);

const user = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
};

function displayUserInfo(anyObject) {
    return `Name: ${anyObject.name}, Age: ${anyObject.age}, Email: ${anyObject.email}`;
};
// let userInfo = displayUserInfo(user);
// let userInfo = displayUserInfo({
//     name: 'Bob',
//     age: 30,
//     email: 'bob@example.com'
// });
// console.log(userInfo);

const myArr = [1, 2, 3, 4, 5];
function indexArray(anyArr) {
    return anyArr[1];
};
// let arr = indexArray(myArr);
// let arr = indexArray([1, 2, 3, 4, 5]);
// console.log(arr);
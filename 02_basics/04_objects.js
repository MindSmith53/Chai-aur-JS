//* Singleton

const User = new Object();
User.name = "John";
User.age = 30;
User.id = '123abc';
// console.log(User);

const user2 = {
    email: 'janeHeath@gmail.com',
    name: {
        firstname: 'Jane',
        lastname: 'Heath',
    }
}
// console.log(user2.name.firstname);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
//const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// console.log(obj3 === obj1);

// console.log(user2.hasOwnProperty('name'));
// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));

const { name: N } = User;
console.log(N);
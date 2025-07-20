let a = 10;
var b = 20;
const c = 30;

if (true) {
    let a = 100;
    var b = 200;
    // const c = 300; // This would cause an error since 'c' is already declared in the outer scope
    // console.log('Inside block:', { a, b, c });
}
// console.log('Outside block:', { a, b, c });

function one() {
    const username = 'John';
    // console.log('Hello');
    function two() {
        const password = '1234';
        console.log('Username: ', username);
    }
    // console.log('Password: ', password);
    two();
}
// one();

if (true) {
    const username = 'Jane';
    if (username === 'Jane') {
        const password = '5678';
        // console.log(username + password);
    }
    // console.log(password);
}
// console.log(username);

//! ++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++

const addOne = function (num) {
    return num + 1;
}
console.log(addOne(10)); // 11

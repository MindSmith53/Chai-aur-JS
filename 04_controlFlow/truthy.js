const userEmail = 'example@mail.co'
// if (userEmail) {
//     console.log('Email is provided');
// } else {
//     console.log('Email is not provided');
// }

//! falsy values => false, 0, -0, BigInt 0n, "", null, undefined, NaN
//* trythy values => true, "0", "false", " ", [], {}, function() {}

let arr = [];
if (arr.length === 0) {
    console.log('Array is empty');
}

let obj = {};
if (Object.keys(obj).length === 0) {
    console.log('Object is empty');
}
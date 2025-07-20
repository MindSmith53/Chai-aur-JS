//* This code checks the temperature and prints whether it's a hot day or not.
// let temperature = 41;

// if (temperature > 40) {
//     console.log("It's a hot day");
// } else {
//     console.log("It's not a hot day");
// }

const balance = 1000;

// if (balance > 0) console.log("Account is in credit");
// else console.log("Account is overdrawn");

// if (balance > 0) {
//     console.log("Account is in credit");
// } else if (balance === 0) {
//     console.log("Account is empty");
// } else {
//     console.log("Account is overdrawn");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromSameDevice = false;

if (userLoggedIn && loggedInFromSameDevice) {
    console.log("User can make a purchase");
} else {
    console.log("User cannot make a purchase");
}
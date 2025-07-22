const arr = [1, 2, 3, 4, 5];
for (const element of arr) {
    // console.log(element);
}

const greetings = 'Hello World!';
for (const greet of greetings) {
    if (greet === ' ') {
        continue; // Skip spaces
    }
    // console.log(`Each character is: ${greet}`);
}

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');
// console.log(map);
for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}
//! Map cannot be iterated with for...in loop

const myObj = {
    'game1': 'Cricket',
    'game2': 'Football',
    'game3': 'Hockey'
}

for (const [key, value] of myObj) {
    // console.log(`${key} :- ${value}`); //! not iterable
}
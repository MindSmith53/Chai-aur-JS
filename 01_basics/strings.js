const name = "John";
const greeting = `Hello, ${name}!`;
// console.log(greeting);

const gameName = new String('Che-ss');
// console.log(gameName);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
let greetingMessage = `Hello ${name},Welcome to the game of ${gameName}!`;
// console.log(greetingMessage);

// console.log(gameName.charAt(0));
// console.log(gameName.indexOf('e'));
const sliced = gameName.slice(-5, 2);
// console.log(sliced);
const spliced = gameName.substring(0, 4);
// console.log(spliced);

const newString = '       hello world!       ';
// console.log(newString);

if (newString.includes('world')) {
    console.log(newString.trim().replace('world', 'universe'));
}
else {
    console.log('The word "world" is not found in the string.');
}

const str = 'The quick brown fox jumps over the lazy dog.';
// const replacedStr = str.replace(' ', '-'); only replaces the first occurrence
const replacedStr = str.replace(/ /g, '-'); // replaces all occurrences
console.log('replacedStr:', replacedStr);

const someString = replacedStr.split('-', 3);
console.log('someString:', someString);

let splitting = str.split(' ');
console.log('splitting:', splitting);

const words = str.split(' ');
console.log(words[4]);

const chars = str.split('');
console.log(chars[4]);

const strCopy = str.split();
console.log(strCopy);



const myObj = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    swift: 'Swift by apple'
};
for (const key in myObj) {
    console.log(`${key} is the shortcut for ${myObj[key]}`);
}

const programming = ['JavaScript', 'Python', 'Ruby', 'Swift'];
for (const key in programming) {
    console.log(`Programming language at index ${key} is ${programming[key]}`);
}
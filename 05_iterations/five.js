const coding = ['JavaScript', 'Python', 'Ruby', 'Swift'];

coding.forEach((item) => {
    //     console.log(`I love coding in ${item}!`);
})

function printMe(item) {
    console.log(`I love coding in ${item}!`);
}
// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: 'JavaScript',
        languageFileExt: '.js',
    },
    {
        languageName: 'Python',
        languageFileExt: '.py',
    },
    {
        languageName: 'Ruby',
        languageFileExt: '.rb',
    },
    {
        languageName: 'Swift',
        languageFileExt: '.swift',
    }
]

myCoding.forEach((item, index) => {
    console.log(`I love coding in ${item.languageName} which is at index ${index} in array ${myCoding[index]} with file extension ${item.languageFileExt}!`);
});
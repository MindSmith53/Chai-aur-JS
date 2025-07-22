const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered = myNums.filter((num) => {
    return num >= 5;
})
// console.log(filtered); // Output: [5, 6, 7, 8, 9, 10]
const newNums = []
myNums.forEach((num) => {
    if (num >= 5) {
        newNums.push(num);
    }
});
// console.log(newNums); // Output: [5, 6, 7, 8, 9, 10]

const books = [
    { title: 'Book 1', genre: 'Fiction', published: 1981, edition: 2004 },
    { title: 'Book 2', genre: 'Non-Fiction', published: 1992, edition: 2008 },
    { title: 'Book 3', genre: 'History', published: 1999, edition: 2007 },
    { title: 'Book 4', genre: 'Non-Fiction', published: 1989, edition: 2010 },
    { title: 'Book 5', genre: 'Science', published: 2009, edition: 2014 },
    { title: 'Book 6', genre: 'Fiction', published: 1987, edition: 2010 },
    { title: 'Book 7', genre: 'History', published: 1986, edition: 1996 },
    { title: 'Book 8', genre: 'Science', published: 2011, edition: 2016 },
    { title: 'Book 9', genre: 'Science', published: 2001, edition: 2016 },
    { title: 'Book 10', genre: 'History', published: 1975, edition: 2003 }
];

let useBooks = books.filter((book) => {
    return book.genre === 'History'
})

useBooks = books.filter((book) => {
    return book.published >= 2000;
})

useBooks = books.filter((book) => {
    return book.published >= 1980 && book.genre === 'History';
})

useBooks = books.map((book) => {
    return {
        title: book.title,
        published: book.published,
        edition: book.edition
    }
})

useBooks = books.filter((book) => {
    return book.genre === 'History' && book.published >= 1980;
}).map((book) => {
    return book.title
})
// console.log(useBooks);

let newNum = myNums.map((num => {
    return num * 2;
}))
// console.log(newNum); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

myNums.forEach((num) => {
    // console.log(num * 2);
})

newNum = myNums
    .map((num) => num * 10)
    .filter((num) => num >= 100)
// console.log(newNum); // Output: [100, 120, 140, 160, 180, 200]

const nums = myNums.reduce((acc, num) => {
    // console.log(`Accumulator: ${acc}, Current Number: ${num}`);
    return acc + num;
}, 0);
// console.log(nums); // Output: 55

const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'python course',
        price: 1999
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 12999
    }
];

const totalPrice = shoppingCart.reduce((acc, item) => {
    return acc + item.price;
}, 0);
console.log(totalPrice);

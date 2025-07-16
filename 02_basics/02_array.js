const marvelHeros = ["thor", "Ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];
// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3][0]);
// let allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);
// const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros);

const newArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const usableArr = newArr.flat(Infinity);
console.log(usableArr);

// Array.isArray
// Array.from
// Array.of


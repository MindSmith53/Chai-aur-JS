//* Named IIFE
(function showMessage() {
    console.log('Hello, World!');
})();

((greet) => {
    console.log(`${greet}, This is an IIFE using arrow function syntax!`);
})('Hello');
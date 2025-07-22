let myArr = [0, 1, 2, 3, 4]
console.log("A ", myArr);
let my1 = myArr.slice(1, 3);
console.log(my1);
console.log("B ", myArr);
let my2 = myArr.splice(1, 3);
console.log(my2);
console.log("C ", myArr);

// var message = prompt("Enter your message", "");
// var counter = parseInt(prompt("How many Times?", "10"));

// if (!message || isNaN(counter) || counter <= 0) {
//   alert("Please enter a valid message and number.");
//   return;
// }

// window.InputEvent = window.Event || window.InputEvent;
// var event = new InputEvent("input", { bubbles: true });
// var textbox = document.querySelector("div[contenteditable][role='textbox']");
// var sendButton = document.querySelector("button[aria-label='Send']");

// if (!textbox || !sendButton) {
//   alert("Could not find textbox or send button.");
//   return;
// }

// for (let index = 0; index < counter; index++) {
//   setTimeout(() => {
//     textbox.value = message;
//     textbox.dispatchEvent(event);
//     sendButton.click();
//   }, index * 1000);
// }
const SECRET = 'I GOT LOVE WITH ME';
let guess = prompt("enter the secret code....")

while(guess!== SECRET){
    guess = prompt("enter the secret code...");
}
console.log("CONGRATS YOU GOT THE SECRET")
const question = prompt("Enter your name");
const thought = prompt("What is your thought process ");
// strong , week , mid 
const goal=prompt("What is your main goal now?");
//Gate exam , learning , air -01, google crack anyof these;
const dedication=prompt("Are you dedicate your day to yout goal");

//yes or no

const hours = prompt("How much hours you spend to achive it ");
//1-15
const life=prompt("After a year where you see yourself");

//government job , iit bombay and earn a lot of money;
let count =0;


if(thought == strong ){
    count = count +10;
}

if (goal= "Gate exam"){
    count = count +8;
}
if(dedication ="yes"){
    count = count + 10;
}
if(hours = range(10,15)){
    count= count +10;
}
if(life = "iit bombay"){
    count = count +10;
}
console.log("hey you score is ${count }");
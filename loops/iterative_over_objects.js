const testScores = {
    keena :80,
    rakshika : 100,
    labish : 80,
    kanishka : 12,
    tanveer : 21,
    himanshu : 121,
    ritika : 77,
    manisha : 89,
    gaurav : 100
}

// for (let person of testScores){
//     console.log(person);
// }

//itertaive_over_object



// for(let person in testScores){
//     console.log(`${person} scored ${testScores[person]}`);
// }


// console.log(Object.keys(testScores))
// console.log(Object.entries(testScores))
// console.log(Object.values(testScores))
let sum = 0;

for (let score of Object.values(testScores)){
    sum = sum + score;
}
console.log(sum);


let total = 0;

let scores = Object.values(testScores);
for(let score of scores){
    total += score;
}
console.log(total/scores.length)

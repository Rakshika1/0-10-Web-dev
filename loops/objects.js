const product = {
    name :"Gummy Bears",
    inStock : true,
    price : 1.99,
    flavours :["grape","apple","cherry"]
}

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

// const fullAddress = restaurant.address +" "+ restaurant.city
// + " "+restaurant.name+ restaurant.state+ restaurant.zipcode;
const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;console.log(fullAddress)

--

// const fitBitData={
// todaySteps: 3087,
// todayMiles: 2.5,
// todayActiveMinutes: 53,
// todayFlightsOfStairs: 20,
// avgGoodSleep: {
    
//         sleepHours: 7,
//         sleepQuality: 8
//     }
// };
// fitBitData.avgGoodSleep.sleepHours  = 10;
// console.log(fitBitData.todaySteps);
// console.log(fitBitData.todayActiveMinutes);
// console.log(fitBitData.avgGoodSleep.sleepHours);



// const student={
//     firstName:"Rakshika",
//     lastName :"Sharma",
//     age : 21,
//     strengths:["selflove","gate-air-01"],
//     exams:{
//         midterm:100,
//         endsem:99
//     }

// }

// console.log(student.firstName);
// console.log(student.strengths[0]);
// console.log(student.exams.midterm);

















// // To make an object literal:
// const dog = {
//     name: "Rusty",
//     breed: "unknown",
//     isAlive: false,
//     age: 7
// }
// // All keys will be turned into strings!

// // To retrieve a value:
// dog.age; //7
// dog["age"]; //7

// //updating values
// dog.breed = "mutt";
// dog["age"] = 8;
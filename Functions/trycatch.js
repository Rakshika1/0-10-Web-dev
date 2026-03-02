// // hello.toUppercase();


// try{
//     hello.toUpperCase();
// }
// catch{
//     console.log("ERROR!");
// }
// console.log('AFTER!')


function yell(msgg) {
    try {
        console.log(msgg.toUpperCase().repeat(3));

    }
    catch (e) {
        console.log(e);
        console.log("Please pass a string next time")

    }
}
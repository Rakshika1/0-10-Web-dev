function makeMysteryfunction(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log("CONGRATS, I AM A GOOD FUNCTION")
        }
    }
    else{
        return function(){
            alert('YOU HAVE BEEN INFECTED BY ACOMPUTER VIRUS! ')
            alert('STOP TRYING TO CLOSE THIS WINDOW ')
            
        }
    }

}

function makeBetweenFunction(min,max){
    return function(num){
        return num>=min && num<-max;
    }


}
const testRange = function (num){
    return num>=100 && num <=200;
}

// makeBetweenFunction(50,100)


// function isBetween1(num){
//     return num>= 50 && num <=100

// }

// function isBetween2(num){
//     return num>=1 && num <=10

// }
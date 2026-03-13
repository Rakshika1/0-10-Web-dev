function add(x,y){
    let sum = x+y;
    return sum;
    console.log("byw");//never run it 
}

function sub(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
    return x+y;
}
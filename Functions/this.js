// this is use to access other properties on the same object
const cat = {
    name: "rakshika",
    color: "grey",
    breed: "human",
    meow() {
        // console.log(name);

        console.log(`${this.name} says MEOWW`);
    }
}


// the value of this depends on the invocation context
// of the function it is used in 
const meow2 = cat.meow;
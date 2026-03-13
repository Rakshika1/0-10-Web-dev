let input =prompt("What would you like to do!");

const todos = ['Collect Chicken eggs','Do the web development']

while(input !== 'quit'&& input !== 'q'){
    if(input == 'list'){
        console.log("**********");
        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('********')
    }
    else if(input === 'new'){
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} is added to the work`)
    }
    else if(input === 'delete'){
        const index = parseInt(prompt('Ok, enter the index which you wnat to delete:'));
        if(Number.isNaN(index)){
             const deleted = todos.splice(index,1);
             console.log(`Ok, deleted ${deleted[0]}`)
        }
        else{
            console.log("Unknown index");
        }
       
    }
    input =prompt("What would you like to do!");
}
console.log("OK QUIT THE APP !")
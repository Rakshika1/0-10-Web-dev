const subreddit = ['rakshika','books','dbms',
    'sharma', 'coa', 'maths'
]

for(let i=0;i<subreddit.length;i++){
    console.log(`Visit reddit.com/r/${subreddit[i]}`)
}

for(let sub of subreddit){
    console.log(sub);
}

const seatingChart = [
    ['krishna','erik','Namita'],
    ['Rakhiks','labish','kanishk']
]

for(let i=0;i<seatingChart.length;i++){
    const row = seatingChart[i];
    console.log(`ROW ${i+1}`);
    for(let j=0;j<row.length;j++){
        console.log(row[j])
    }
}

for(let row of seatingChart){
    for(let students of row){
        console.log(students);
    }
}


for(let char of "hello world!"){
    console.log(char);
}

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
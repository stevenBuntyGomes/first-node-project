// const amount = 9;
// if(amount < 10) {
//     console.log("small number");
// }else{
//     console.log("large number");
// }

// console.log("this is node app");

const {readFile, writeFile} = require('fs');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-aysnc.txt', 
            `Here is the new result: ${first}, ${second}`,
            {flag: 'a'}, (err, result) => {
                if(err){
                    console.log(err);
                }
                console.log(result);
                console.log("done doing the task");
            });
    })
});

console.log("next task");

//{flag: 'a'} - reads file after creating the file
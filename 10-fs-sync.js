const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const fs = require('fs');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

const write = writeFileSync('./content/result-sync.txt', `Here is a result: ${first}, ${second}`, {flag: 'a'});

console.log("done with the task");
console.log("starting the next one");
//{flag: 'a'} - reads file after creating the file
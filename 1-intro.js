//__dirname - path to current directory
//__filename - file name
// require - function to use modules(commonJS)
// module - info about current module(file)
// process - info about env where the program is being executed
// console.log(__dirname);
// setInterval(() => {
//     console.log("hello world");
//     console.log("hello world");
// }, 1000);

// setTimeout(() => {

// })


// Modules

// commonJs - every file is modules by default
// modules - encapculdated code (only share minimum)
// const names = require('./4-names');
// const sayHi = require('./5-utils');
// const data = require('./6-alternative-flavor');
// console.log(data);
// console.log(names);
// sayHi(names.john);

// require('./7-mind-granade');


// sayHi("Bunty");
// sayHi(john);


const os = require('os');
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
// console.log(`system uptime is ${os.uptime()} in seconds`)
const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOs);
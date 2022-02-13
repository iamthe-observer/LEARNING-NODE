// const log = require('./logger')

// log('john')

// path module
const path = require('path');
let pathObj = path.parse(__filename)

// console.log(pathObj);


// OS module
const os = require('os');
const {
    createRequire
} = require('module');

let totalMemory = os.totalmem()
let freeMemory = os.freemem()

// console.log(totalMemory, freeMemory);


// File System module
const fs = require('fs');

const files = fs.readdirSync("./")
    // console.log(files);

// const files2 = fs.readdir('./', (err, files) => {
//     if (err) console.log("error", err);
//     else console.log(('results', files));
// })


// Events
const Log = require('./logger')
const logger = new Log()

// Register a listener
logger.on("messageLogged", (arg) => {
    console.log('listener called', arg);
})

logger.log('message')
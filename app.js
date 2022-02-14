// const log = require('./logger')

// log('john')

// path module
// const path = require('path');
// let pathObj = path.parse(__filename)

// console.log(pathObj);



// OS module
// const os = require('os');
// const {
//     createRequire
// } = require('module');

// let totalMemory = os.totalmem()
// let freeMemory = os.freemem()

// console.log(totalMemory, freeMemory);



// File System module
// const fs = require('fs');

// const files = fs.readdirSync("./")
// console.log(files);

// const files2 = fs.readdir('./', (err, files) => {
//     if (err) console.log("error", err);
//     else console.log(('results', files));
// })



// Events
// const Log = require('./logger')
// const logger = new Log()

// // Register a listener
// logger.on("messageLogged", (arg) => {
//     console.log('listener called', arg);
// })

// logger.log('message')


// Http module
// 127.0.0.1:3000
// const http = require('http');
// const server = http.createServer((req, res) => {
//         if (req.url === '/') {
//             res.write('hello world')
//             res.write('so this is love');
//             console.log('end connection');
//             res.end()
//         }
//     })
//     // register a server listener
// server.on('connection', (socket) => {
//     console.log("new connection");
// })
// server.listen(3000)

// console.log('listening on port 3000...');
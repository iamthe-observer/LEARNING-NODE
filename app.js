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


// require('./module')

// still going back to the os module
// const os = require("os")

// const currentOS = {
//     name: os.type(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log("🚀 ~ file: app.js ~ line 80 ~ currentOS", currentOS)


// path again
// const path = require('path')

// const filePath = path.join('/content/', 'contents.txt')
// console.log("🚀 ~ file: app.js ~ line 89 ~ filePath", filePath)

// const absolutePath = path.resolve(__dirname, 'content', 'content.txt')
// console.log("🚀 ~ file: app.js ~ line 91 ~ absolutePath", absolutePath)



// file system (FS)
const {
    readFileSync,
    writeFileSync,
    writeFile,
    readFile,
} = require('fs')
    // console.log('start');

// sync
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync("./content/result-sync.text", `Here is the result: ${first} , ${second}`, {
//     flag: 'a'
// })

// console.log('done with task');
// console.log('starting the next one');



// async
// console.log("start");
// const first = readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err)
//             return
//         }
//         const second = result;
//         writeFile('./content/result-sync.txt', `here is the result = ${first}, ${second}`, (err, result) => {
//             if (err) {
//                 console.log(err);
//                 return
//             }
//             console.log('done with the task');
//         })
//     })
// })
// console.log('starting next task');


// http module
// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.url == './') {
//         res.end('hello welcome to the page')
//     }
//     if (req.url === '/about') {
//         res.end('here is our short history ')
//     }

//     res.end(`
//     <h1>oops!</h1>
//     <p>we cant find the page you are looking for</p>
//     <a href ='/'>back home</a>
//     `)
// })

// server.listen(5000)
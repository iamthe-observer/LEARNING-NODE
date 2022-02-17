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
// const {
//     error
// } = require('console')
// const {
//     readFileSync,
//     writeFileSync,
//     writeFile,
//     readFile,
// } = require('fs')
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


// Express JS
// Event Loop
// synchronous
// const {
//     readFile
// } = require('fs')
// console.log('started the first task');
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(result);
//     console.log('completed first task');
// })
// console.log(("starting next task"));


// console.log('first');
// setTimeout(() => {
//     console.log('second');
// }, 0)
// console.log('third');

// async
// const {
//     readFile,
//     writeFile
// } = require('fs')
// const {
//     reject
// } = require('lodash')
// const {
//     resolve
// } = require('path')

// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async() => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf8')
//         const second = await readFilePromise('./content/second.txt', 'utf8')
//         await writeFilePromise('./content/result-mind-grenade.txt', `bread and butter just like ${first}, and ${second}`)
//         console.log(first);
//         console.log(second);
//     } catch (e) {
//         console.log(e);
//     }
// }

// start()

// const getTextPromise = (path) => {
//     return new Promise((res, rej) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 rej(err)
//             } else {
//                 res(data)
//             }
//         })
//     })
// }

// getTextPromise('./content/first.txt')
//     .then(res => console.log(res))
//     .catch(err => console.log(err))



// EVENTS
// const EventEmitter = require('events');
var events = require('events');
var eventEmitter = new events.EventEmitter();
// eventEmitter.on('my_event', (name, id) => {
//     console.log(`data received user: ${name} ${id} successfully.`);
// });
// eventEmitter.on('my_event', () => {
//     console.log('info received successfully.');
// });
// eventEmitter.emit('my_event', 'james', 22);

// const customerEmitter = new EventEmitter()
// customerEmitter.on('response', () => {
//     console.log('data recieved');
// })


// Event Emitter Http module

// var http = require('http');
const fs = require('fs');
const {
    writeFile
} = require('fs/promises');
// const util = require('util');

// const server = http.createServer()
// server.on('request', (req, res) => {
//     res.end('why cant you accept objects')
// })

// server.listen(8081)

// console.log('Server running at http://127.0.0.1:8081/');

// STREAMS

const stream = fs.createReadStream('./content/big.txt', {
    highWaterMark: 90000,
    encoding: 'utf8'
})

stream.on('data', (result) => {
    console.log(result);
    fs.writeFileSync('./content/second.txt', result, {
        flag: 'a'
    })
})

stream.on('error', (err) => {
    console.log(err);
})
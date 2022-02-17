// const EventEmitter = require('events');
// class Logger extends EventEmitter {
//     log(message) {
//         console.log(message)

//         // Raise an event
//         this.emit("messageLogged", {
//             data: message
//         })
//     }

// }

// module.exports = Logger


// alternative analysis
// module.exports.items = ['item1', 'item2']

// const person = {
//     name: 'bob'
// }

// module.exports.singlePerson = person

// function addValues(num1, num2) {
//     console.log(`the sum is ${num1 + num2}`);
// }

// module.exports = addValues

const {
    writeFileSync
} = require('fs')

for (let i = 1; i < 1001; i++) {
    writeFileSync('./content/big.txt', `the number is ${i}\n`, {
        flag: "a"
    })
}
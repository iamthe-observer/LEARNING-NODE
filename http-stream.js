const fs = require('fs');
const http = require('http');

http
    .createServer(function(request, response) {
        // const text = fs.readFileSync('./content/big.txt', 'utf8')
        // response.end(text);

        const fileStream = fs.createReadStream('./content/big.txt', 'utf8')

        fileStream.on('open', () => {
            fileStream.pipe(response)
        })

        fileStream.on('error', (err) => {
            response.end(err)
        })
    }).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
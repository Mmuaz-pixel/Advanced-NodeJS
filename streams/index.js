const fs = require('fs');
const { Transform, pipeline } = require('stream');

const readableStream = fs.createReadStream('input.txt', { encoding: 'utf8', highWaterMark: 20 });

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        // Convert the incoming chunk from UTF-16 to UTF-8
        const utf8Data = Buffer.from(chunk, 'utf16le').toString('utf8');
        this.push(utf8Data);
        callback(); // indicates that next chunk can be sent
    },
});

const writableStream = fs.createWriteStream('output.txt');

readableStream.on('data', (chunk) => {
    console.log('Reading chunk:', chunk);
});

readableStream.on('end', () => {
    console.log('Read stream ended.');
    writableStream.end();
});

transformStream.on('data', (chunk) => {
    console.log('Transformed chunk:', chunk);
});

writableStream.on('finish', () => {
    console.log('Write stream finished.');
});

// readableStream.pipe(transformStream).pipe(writableStream); // prone to errors 

pipeline(readableStream, transformStream, writableStream, (err) => { // not prone to errors (handles all errors in one callback)
    if (err) {
        console.error('Pipeline failed:', err);
    } else {
        console.log('Pipeline succeeded.');
    }
})
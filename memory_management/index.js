const express = require('express');
const app = express();
const Emitter = require('events');
const eventEmitter = new Emitter();

const PORT = 3000;

let tasks = []

app.get('/memory', (req, res) => {

    tasks.push(function () {
        return req.headers;
    })

    // const huge = new Array(1000000).fill(req) 

    req.user = {
        requestObj: req,
        user: 'name',
        // huge
    }

    // eventEmitter.on('start', () => {
    //     console.log('useless event emitted');
    // })

    // const resTimeout = setTimeout(() => {
    //     res.send('ae hey. timeout bhai')   
    // });

    // clearTimeout(resTimeout); 

    setTimeout(() => {
        res.send('ae hey. timeout bhai')
    });

})

app.listen(PORT, () => {
    console.log(process.pid);
})
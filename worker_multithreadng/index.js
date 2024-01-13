const express = require('express');
const app = express();
const PORT = 3000;
const { Worker } = require('worker_threads');

app.get('/blocking', (req, res) => {
	const worker = new Worker('./worker.js');

	worker.on('message', (data) => {
		return res.send({ msg: `message is ${data}` });
	})

	worker.on('error', (error) => {
		res.json({ error: `error is ${error}` });
	})
})

app.get('/non-blocking', (req, res)=> 
{
	res.json({msg: 'non blocking message'}); 
})

app.listen(PORT, () => {
	console.log(`App is running on PORT ${PORT}`);
})


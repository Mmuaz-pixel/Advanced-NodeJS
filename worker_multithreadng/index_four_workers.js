const express = require('express');
const app = express();
const PORT = 3000;
const { Worker } = require('worker_threads');

const THREADS = 4;

function createWorker() {
	return new Promise((resolve, reject) => {

		const worker = new Worker('./four_workers.js', {
			workerData: { thread_count: THREADS }
		});

		worker.on('message', (data) => {
			resolve(data);
		})

		worker.on('error', (error) => {
			reject(error);
		})
	})
}

app.get('/blocking', async(req, res) => {
	let workerPromises = []
	for(let i = 0; i<THREADS; i++)
	{
		workerPromises.push(createWorker()); 
	}

	const promises = await Promise.all(workerPromises); 
	const total =  promises[0] + promises[1] + promises[2] + promises[3]; 

	res.json({msg: total}); 
})

app.get('/non-blocking', (req, res) => {
	res.json({ msg: 'non blocking message' });
})

app.listen(PORT, () => {
	console.log(`App is running on PORT ${PORT}`);
})
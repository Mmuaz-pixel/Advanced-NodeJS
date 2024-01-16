const express = require('express');
const NodeCache = require('node-cache');

let fetchModule;

async function setupFetch() {
	fetchModule = await import('node-fetch');
}

const myCache = new NodeCache({ stdTTL: 20 });
const app = express();

const sampleURI = 'https://jsonplaceholder.typicode.com/todos';

app.get('/todos', async (req, res) => {
	try {
		if (!fetchModule) {
			await setupFetch();
		}

		if (myCache.has('todos')) {
			res.json(myCache.get('todos'));
		}
		else {
			const response = await fetchModule.default(sampleURI);
			const data = await response.json();
			myCache.set('todos', data);
			res.json(data);
		}

	} catch (error) {
		console.error('Error fetching data:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

app.listen(4000, () => {
	console.log('app running...');
});

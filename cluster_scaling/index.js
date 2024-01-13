const express = require('express'); 
const PORT = 3000; 

const app = express(); 

app.get('/heavy', (req, res)=> 
{
	let counter = 0; 
	for(let i = 0; i<20_000_000_000; i++)
	{
		counter++; 
	}

	res.send({counter: counter}); 
})

app.listen(PORT, ()=> 
{
	console.log(`Worker pid = ${process.pid}`); 
})
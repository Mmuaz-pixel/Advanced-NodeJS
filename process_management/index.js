// pm2 is used for process management. it helps to keep applications alive and has a built in load balancer 


//Services 

// 1) Load balancing - when too many reqs come it runs the application on multiple ports to balance 

// 2) Maintaining logs 

// 3) Automatic restart of application in case of crash 

const express = require('express'); 
const morgan = require('morgan'); 
const app = express(); 

app.use(morgan('dev')); // logs the info of api that was hit 

app.get('/', (req, res)=>{
	res.json({msg: '/'}); 
})

app.get('/api', (req, res)=>{
	res.json({msg: '/api'}); 
})

app.listen(8080, ()=>{
	console.log('App running on port 8080'); 
})
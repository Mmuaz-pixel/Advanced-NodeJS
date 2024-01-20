// swagger is a api tool used to show the details of apis of an application.
// it provides a UI tool to show apis 

const express = require('express'); 
const { swaggerServe, swaggerSetup } = require('./config');
const app = express();

app.get('/', (req, res)=>{
	res.json({msg: 'hello'});
})

app.use('/api-docs', swaggerServe, swaggerSetup);

app.listen(3000); 
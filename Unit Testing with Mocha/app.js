const express = require('express'); 
const port = 8080; 

const app = express(); 

app.use('/user', require('./routes/user')); 

app.listen(port, ()=>{
	console.log(`App is listening on port ${port}`); 
})

module.exports = app; 
const express = require('express'); 
const RedisStore = require('connect-redis').default; 
const redis = require('redis'); 
const session = require('express-session'); 

const app = express(); 
app.use(express.json()); 

// if you run behind a proxy (e.g., nginx)
app.set('trust proxy', 1); 


// configuring redis 
const redisClient = redis.createClient({
	port: 6379, 
	host: 'localhost'
})

redisClient.connect().catch(console.error); 

app.use(session({
	store: new RedisStore({client: redisClient}), 
	secret: 'secret_here', 
	saveUninitialized: false, 
	resave: false, 
	cookie: {
		secure: false, // true only accepts cookie over https 
		httpOnly: true, // prevents client side js to read cookies
		maxAge: 1000*60*30 // age in milliseconds
	}
}))

app.post('/login', (req, res, next)=>{
	const {email, password} = req.body; 

	// checking the validity of email and password part 
	// ....


	req.session.myid = 'any_id'; 
	req.session.name= 'name_of_client'; 

	res.json({msg: 'user logged in'}); 
})

// middleware for subsequent requests to check the session

app.use((req, res, next)=>{
	if(!req.session || !req.session.id)
	{
		return res.status(401).json('you are not logged in'); 
	}
	next(); 
})

app.get('/profile', (req, res, next)=>{
	return res.json(req.session); 
})


app.listen(8080, ()=>{
	console.log('App running on port 8080'); 
})
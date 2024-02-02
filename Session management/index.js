const express = require('express'); 
const connectRedis = require('connect-redis'); 
const redis = require('redis'); 
const session = require('express-session'); 

const app = express(); 

// if you run behind a proxy (e.g., nginx)
app.set('trust proxy', 1); 

const RedisStore = connectRedis(session); 

// configuring redis 
const redisClient = redis.createClient({
	port: 6379, 
	host: 'localhost'
})

app.use(session({
	store: new RedisStore({client: redisClient}), 
	secret: 'secret_here', 
	saveUninitialized: false, 
	cookie: {
		secure: false, // true only accepts cookie over https 
		httpOnly: true, // prevents client side js to read cookies
		maxAge: 1000*60*30 // age in milliseconds
	}
}))


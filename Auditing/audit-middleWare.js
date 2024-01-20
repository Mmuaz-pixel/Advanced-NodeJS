// logging is used to keep track of who did what. This technique is useful when application becomes professional. This is a type of log that can be maintained. 

const express = require('express');
const logger = require('winston'); // or any other logging library
const {transports, format} = require('winston'); 
// Create an Express app
const app = express();

logger.add(new transports.Console())

// Custom middleware function for auditing
function auditMiddleware(req, res, next) {
	try {
		console.log(req.log);
		const actor = { id: req.user ? req.user.id : 'unknown', type: 'user' }; // Assuming user information is available in req.user
		const action = req.log.action || 'default'; // Using HTTP method as the action for simplicity
		const context = {
			location: req.ip ? req.ip : '',
			user_agent: req.get('user-agent')
		};
		const targets = []; // You need to define how to determine the targets based on your application logic

		// Log the audit event
		const auditEvent = {
			actor,
			action,
			context,
			targets,
			occurredAt: new Date().toISOString(),
		};

		logger.info(JSON.stringify(auditEvent));
		next();
	} catch (err) {
		next(err);
	}
}

// Use the audit middleware for all routes

// Define your routes
app.get('/', (req, res, next) => {
	// Initialize req.log
	req.log = {
		action: 'custom'
	};
	res.send('Hello, World!');
	console.log('hi');
	next(); 
});

app.use(auditMiddleware);
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

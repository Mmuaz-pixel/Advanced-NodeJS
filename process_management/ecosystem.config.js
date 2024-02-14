module.exports = {
  apps : [{
    script: 'index.js',
    watch: true, 
	instances : "max",
    exec_mode : "cluster", 
	env: {
		"PORT": 8080,
		"NODE_ENV": "development"
	}
  }],
};

// sample ecosystem file 
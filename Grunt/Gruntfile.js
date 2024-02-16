module.exports = function(grunt) {
	grunt.initConfig({
		// task1: {}, 
		// task2: {}, 
		// task3: {}, 
		// randomProp : 'value', 
		package: grunt.file.readJSON('package.json'), 
		uglify: { // used to minify js files 
			t1: { // any arbitrary name 
				files: [
					{
						src: 'src/example.js', 
						dest: 'build/example.min.js'
					}
				]
			}
		}
	}); 

	grunt.loadNpmTasks('grunt-contrib-uglify'); 
}
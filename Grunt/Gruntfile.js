module.exports = function(grunt) {
	grunt.initConfig({
		// task1: {}, 
		// task2: {}, 
		// task3: {}, 
		// randomProp : 'value', 
		package: grunt.file.readJSON('package.json'), 
		uglify: { // used to minify js files 

			options: {
				mangle: false, // prevent changes to variable and function names 
				sourceMap: true, // create source map
				sourceMapName: './sourcemap.map', 

				// sourceMap: {
				// 	includeSources: true // includes original source code within the source map 
				//   },

				// sourceMapIn: './sourcemap. map', // input sourcemap from a previous compilation

				compress: {
					drop_console: true // remove console.* functions 
				}, 

				nameCache: '.tmp/grunt-uglify-cache.json' // when provided, it saves the mangled names in this cache to ensure consistency 
			}, 
			t1: { // any arbitrary name 
				files: [
					{
						src: 'src/example.js', 
						dest: 'build/example.min.js'
					}
				]
			}, 

			t2: {
				files: [
					{
						src: 'src/*.js', 
						dest: 'build/all_compressed.js'
					}
				]
			}
		}, 

		cssmin: {
			target1: {
				files: [
					{
						src: 'src/style.css', 
						dest: 'build/style.min.css'
					}
				]
			}
		}, 

		watch: { // run the giving tasks on these files automatically when a change occurs
			files: ['src/*.js', 'src/*.css'], 
			tasks: ['cssmin', 'uglify']
		}
	}); 

	grunt.loadNpmTasks('grunt-contrib-uglify'); 
	grunt.loadNpmTasks('grunt-contrib-cssmin'); 
	grunt.loadNpmTasks('grunt-contrib-watch'); 

	grunt.registerTask('compressJs', 'uglify'); // alias defined :  grunt uglify -> grunt compressJs (command)
}
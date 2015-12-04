module.exports = function(grunt)
{
	grunt.initConfig({

		watch : {
			files: ['QuickLee/sass/global.scss', 'QuickLee/assets/js/ql-scripts.js'],
			tasks : ['sass', 'uglify']
		},

		sass : {
			dist : {
				options: {
					style: 'compressed'
				},
				files: {
					'QuickLee/assets/css/styles.css': 'QuickLee/sass/global.scss',
				}
			}
		},

		uglify : {
			my_target: {
		      files: {
		        'QuickLee/assets/js/min/ql-scripts.min.js': 'QuickLee/assets/js/ql-scripts.js'
		      }
		    }
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', 'watch');
}
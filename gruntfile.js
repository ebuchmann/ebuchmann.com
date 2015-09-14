module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          '_js/lazysizes.js',
          '_js/facebook.js',
          '_js/twitter.js',
          '_js/pinterest.js',
          '_js/analytics.js'
        ],
        dest: 'js/combined.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/combined.min.js' : 'js/combined.js'
        }
      }
    }
  });

  //grunt.registerTask('default', ['css, js']);
  //grunt.registerTask('css', ['jshint']);
  grunt.registerTask('js', ['concat', 'uglify']);

};

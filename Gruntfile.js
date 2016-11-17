module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    'http-server' : {
            dev: {
                root: 'app',
                port: 8888,
                host: "127.0.0.1",
                cache: 0,
                showDir : true,
                autoIndex: true,
                ext: "html",
                runInBackground: true,
                logFn: function(req, res, error) { },
                openBrowser : true,
        }
    },
    jade: {
        compile: {
            options: {
                client: false,
                pretty: true,
                data: function(dest, src) {
                  return require('./locals.json');
                }
            },
            files: [ {
              cwd: "src/views",
              src: "**/*.jade",
              dest: "build/templates",
              expand: true,
              ext: ".html"
            } ]
        }
    },
    watch: {
      grunt: { files: ['Gruntfile.js'] },
        jade: {
          files: 'src/views/**/*.jade',
          tasks: ['jade','copy']
        }
    },
    copy: {
      main: {
        files: [
           {expand: true, src: ['**'],
           cwd: 'build/', dest: 'app/'},
           {expand: true, src: ['assets/**'], dest: 'app/'},
        ],
      },
    },
  });
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-http-server');


  // Default task.
  grunt.registerTask('default', 'Convert Jade templates into html templates', ['jade']);
  grunt.registerTask('build', 'Convert Jade templates into html templates and watch', ['jade','copy','http-server','watch']);

};

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    'http-server' : {
            dev: {
                // the server root directory
                root: 'app',
                // the server port
                // can also be written as a function, e.g.
                // port: function() { return 8282; }
                port: 8888,

                // the host ip address
                // If specified to, for example, "127.0.0.1" the server will
                // only be available on that ip.
                // Specify "0.0.0.0" to be available everywhere
                host: "127.0.0.1",
                cache: 0,
                showDir : true,
                autoIndex: true,

                // server default file extension
                ext: "html",

                // run in parallel with other tasks
                runInBackground: true,

                // specify a logger function. By default the requests are
                // sent to stdout.
                logFn: function(req, res, error) { },

                // Tell grunt task to open the browser
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
           {expand: true, src: ['build/templates/**'], dest: 'app/'},
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

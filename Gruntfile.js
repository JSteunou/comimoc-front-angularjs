module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '\n/* Comimoc front-end with AngularJS  v<%= pkg.version %>\n(c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> <%= pkg.repository.url %>\nLicense: <%= pkg.license %>\n*/\n'
      },
      build: {
        src: 'src/scripts/<%= pkg.shortname %>.js',
        dest: 'src/scripts/<%= pkg.shortname %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
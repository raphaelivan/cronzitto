module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        jshintrc: true
      },

      gruntfile: {
        src: ['Gruntfile.js']
      },

      src: {
        src: ['lib/*.js']
      }
    },


    watch: {
      scripts: {
        files: ['lib/*.js', 'bin/*.js'],
        tasks: ['jshint']
      },

      options: {
        spawn: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};
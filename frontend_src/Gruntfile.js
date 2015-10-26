module.exports = function (grunt) {
  var configObject = require('./grunt/_config');
  var PACKAGE_JSON = grunt.file.readJSON('package.json');
  grunt.config.init(configObject);
  // Load Grunt Plugins
  Object.keys(PACKAGE_JSON.devDependencies).map(function(name){
    if(name.match('grunt-')){
      grunt.loadNpmTasks(name);
    }
  });

  /*
   * Grunt Tasks
   */
  // ALL
  grunt.registerTask('default', [

  ]);

  grunt.registerTask('css', [
    'compass',

    'notify:css'
  ]);

  grunt.registerTask('js', [
    'jshint:all',

    'notify:js'
  ]);
};

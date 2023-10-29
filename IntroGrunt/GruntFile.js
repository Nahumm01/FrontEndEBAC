module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "main.css": "main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "main.min.css": "main.less",
        },
      },
    },
    sass:{
      options:{
        style:'compressed'
      },
      dist:{
        files:{
          'main2.css':'main.scss'
        }
      }
    }
  });

  grunt.registerTask("olaGrunt", function () {
    const done = this.async();
    setTimeout(function () {
      console.log("Olá Grunt");
      done();
    }, 4000);
  });
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-sass");

  grunt.registerTask("default", ["less",'sass']);
};

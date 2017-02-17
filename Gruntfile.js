module.exports = function(grunt) {
    grunt.initConfig({
        uncss: {
            fetchFromUrl: {
                files: [
                    {
                        nonull: true,
                        src: ['https://boltonalex.com'],
                        dest: 'build/static/css/outputUrl.css'
                    }
                ]
            }
        }
    })
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadTasks('tasks');
    grunt.registerTask('getNewCss', ['uncss:fetchFromUrl']);
};

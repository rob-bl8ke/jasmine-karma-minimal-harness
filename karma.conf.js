// Karma configuration
module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine", "browserify"],
        files: ["tests/*.spec.js"],
        exclude: [],
        browserify: {
            watch: true,
            debug: true,
        },
        preprocessors: {
            "tests/*.spec.js": ["browserify"],
        },
        plugins: [
            require("karma-browserify"),
            require("karma-jasmine"),
            require("karma-chrome-launcher"),
            require("karma-spec-reporter"),
            require("karma-jasmine-html-reporter"),
        ],

        reporters: ["spec", "kjhtml"],
        port: 9876,
        colors: true,

        logLevel: config.LOG_DISABLE,
        autoWatch: true,
        browsers: ["Chrome"],
        client: {
            clearContext: false,
        },

        singleRun: false,
        concurrency: Infinity,
    });
};

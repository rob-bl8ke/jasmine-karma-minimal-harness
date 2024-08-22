# Summary

Create a minimal Jasmine-Karma boiler-plate test harness that will capture the browser and report results to the browser of your choice. Great for:
- Simple algorithm testing
- A starting place for running re-runnable API Tests

# Setup

- [Original source at Medium](https://ivantay2003.medium.com/setting-up-karma-with-jasmine-791d83a71fc4).

Initialize a node project.
```
npm init -y
```
Install Jasmine.
```
npm install jasmine --save-dev
```
Install some Karma related packages that allow you to report on tests in the browser.
```
npm install jasmine-core karma karma-chrome-launcher karma-jasmine karma-jasmine-html-reporter karma-spec-reporter --save-dev
```

To support external modules that need require install browserfly. This can read your external module that have require: `const fs = require (‘fs’)`.

```
npm install --save-dev karma-browserify browserify watchify
```

Create “karma.conf.js” in your project root folder.

```js
// Karma configuration
module.exports = function(config) {
  config.set({
    
    basePath: '',
    frameworks: ['jasmine', 'browserify'],
    files: [
      'tests/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
        'test/*.js': [ 'browserify' ]
    },
    plugins: [
        require ('karma-browserify'),
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-spec-reporter'),
        require('karma-jasmine-html-reporter')
    ],
    
    reporters: ['spec','kjhtml'],
    port: 9876,
    colors: true,
    
    logLevel: config.LOG_DISABLE,
    autoWatch: true,
    browsers: ['Chrome'],
    client: {
       clearContext: false
    },
    
    singleRun: false,
    concurrency: Infinity,
  })
}
```
Create a `tests` directory and create `example.spec.js`. Here is some initial content:

```js
describe('Here is a simple test', () => {
    it('should always be true', () => {
        debugger;
        expect(true).toBeTrue();
    });
});
```
You're good to go. Run this command and check that the runner opens your Chrome browser and reports the results. Note that you can use `debugger` to stop and debug the test.
```
karma start
```
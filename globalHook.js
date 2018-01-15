const htmlReporter = require('nightwatch-html-reporter');

const reporter = new htmlReporter({
  openBrowser: false,
  reportsDirectory: __dirname + '/reports',
  uniqueFilename: true,
  separateReportPerSuite: true,
  themeName: 'cover',
});

module.exports = {
  reporter: reporter.fn,
};

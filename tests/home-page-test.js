module.exports = {
  before: function(browser) {
    browser.init();
    browser.waitForElementVisible("body", 1000);
  },

  after: function(browser, done) {
    browser.end(function() {
      done();
    });
  },

  'Verify title': function(browser) {
    browser.assert.title("The Internet", "Asserting title of internet heroku");
  },

  'Verify heading': function(browser) {
    const home = browser.page.home();
    home.expect.section('@heading').to.be.visible;
    home.expect.section('@heading').text.to.equal('Welcome to the-internet');
  },

  'Verify content container': function(browser) {
    const home = browser.page.home();
    home.expect.section('@container').to.be.visible;

    const container = home.section.container;
    container.expect.element('@heading').text.to.equal('Available Examples');
  },

  'Verify List of Links': function(browser) {
    const container = browser.page.home().section.container;
    container.assert.elementCount('@linkList', 39);
  },

  'Verify Page footer': function(browser) {
    const home = browser.page.home();
    home.expect.section('@footer').text.to.equal('Powered by Elemental Selenium');
  },
};

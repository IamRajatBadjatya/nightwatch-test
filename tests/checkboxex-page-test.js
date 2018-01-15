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

  'Verify heading of checkbox page': function(browser) {
    const homeContainer = browser.page.home().section.container;
    homeContainer.navigateToCheckboxes();

    const checkboxesPage = browser.page.checkboxes();
    checkboxesPage.expect.section('@container').to.be.visible;

    const checkboxesContainer = checkboxesPage.section.container;
    checkboxesContainer.expect.element('@heading').text.to.equal('Checkboxes');
  },

  'Verify the count of checkboxes': function(browser) {
    const container = browser.page.checkboxes().section.container;
    container.assert.elementCount('@checkboxList', 2);
  },

  'Verify the condition of checkboxes': function(browser) {
    const container = browser.page.checkboxes().section.container;
    container.expect.element('@checkbox1').to.not.be.selected;

    container.click('@checkbox1');
    container.expect.element('@checkbox1').to.be.selected;
    container.expect.element('@checkbox2').to.be.selected;
  },
};

const homePageCommands = {
  navigateToCheckboxes: function() {
    return this.click('@checkboxesLink');
  },
};

module.exports = {

  sections: {
    heading: {
      selector: '.heading',
    },

    container: {
      selector: '#content',
      commands: [homePageCommands],
      elements: {
        heading: 'h2',
        linkList: 'li',
        checkboxesLink: 'a[href="/checkboxes"]',
      }
    },

    footer: {
      selector: '#page-footer',
    }
  },

};

module.exports = {

  sections: {
    container: {
      selector: '#content',
      elements: {
        heading: 'h3',
        checkboxList: 'input[type="checkbox"]',
        checkbox1: {
          selector: "//input[following-sibling::text()[contains(.,'checkbox 1')]]",
          locateStrategy: 'xpath'
        },
        checkbox2: {
          selector: "//input[following-sibling::text()[contains(.,'checkbox 2')]]",
          locateStrategy: 'xpath'
        },
      }
    },
  },

};

exports.assertion = function(selector, count, msg) {
  const ancestors = selector;

  // If the selector comes from a section of a page object
  // selector will be an array of objects starting from the outermost
  // ancestor (section), and ending with the element
  // Join their selectors in order
  // Should probably look into getting this added to core
  if( typeof ancestors !== 'string' ){
      selector = '';

      while( oElement = ancestors.shift() ){
          selector += ' ' + oElement.selector;
      }
  }

  this.message = msg || `Testing if element <${selector}> has count: ${count}`;
  this.expected = count;

  this.pass = function(value) {
    return value === this.expected;
  }

  this.value = function(result) {
    return result.value;
  }

  this.command = function(callback) {
    var self = this;
    return this.api.execute(function (selector) {
      return document.querySelectorAll(selector).length;
    }, [selector], function (res) {
      callback.call(self, res);
    });
  }
}

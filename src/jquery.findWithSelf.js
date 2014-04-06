(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

  var findWithSelf = function (arg) {
    return this.find(arg).andSelf().filter(arg);
  };

  $.fn.findWithSelf = findWithSelf;

  return findWithSelf;
}));

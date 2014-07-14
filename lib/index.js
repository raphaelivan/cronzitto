'use strict';

;(function() {
  var
      log   = require('pretty-log')
    , Event = require('./event').Event;

  exports.watch = function (callback, timer) {
    if (typeof setInterval !== 'function') {
      log.error('OOPS!');
      return;
    }

    return new Event(callback, timer);
  };
})();
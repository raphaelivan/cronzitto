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


  exports.once = function (callback, sleep) {
    if (typeof setTimeout !== 'function') {
      log.error('OOPS!');
      return;
    };

    setTimeout(callback, sleep);
  }
})();
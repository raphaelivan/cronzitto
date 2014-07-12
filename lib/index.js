'use strict';

;(function() {
  var
      log   = require('pretty-log');

  exports.watch = function (callback, timer) {
    if (typeof setIntervall === undefined) {
      log.error('OOPS!');
    }

    setInterval(callback, timer);
  };
})();
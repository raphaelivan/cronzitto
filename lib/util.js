'use strict';

;(function() {
  var log = require('pretty-log');

  exports.convert = function (timer) {
    var parsedNumber;

    if (!timer.match(/^\d/)) {
      var message = 'Invalid value for the timer. \n ';
      message += 'See the documentation for more details. https://github.com/raphaelivan/cronzitto/blob/master/README.md';

      log.error(message);
      return;
    }

    parsedNumber = parseFloat( timer.match(/^\d+/)[0]);

    if (timer.indexOf('second') !== -1) {
      return  parsedNumber * 1000;
    }

    if (timer.indexOf('minute') !== -1) {
      return parsedNumber * 60 * 1000;
    }
  };

})();
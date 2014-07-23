'use strict';

;(function() {
  var
      log    = require('pretty-log')
    , Event  = require('./event').Event
    , growl  = require('growl')
    , path   = require('path')
    , base   = __dirname
    , config = { notify: true, beep: true }
    , beep   = require('beep').Beep()
    , sound  = path.join(base, '..', 'assets', 'beep.mp3');

  exports.watch = function (callback, timer) {
    var convertedTimer;

    if (typeof setInterval !== 'function') {
      log.error('OOPS! Something\'s gone wrong.');
      return;
    }

    convertedTimer = convertStringTimerToMiliseconds(timer);

    return new Event(callback, convertedTimer, config.notify);
  };


  exports.once = function (callback, sleep) {
    var convertedTimer;

    if (typeof setTimeout !== 'function') {
      log.error('OOPS! Something\'s gone wrong. ');
      return;
    }

    convertedTimer = convertStringTimerToMiliseconds(sleep);

    setTimeout(function () {
      if (typeof callback === 'function') {
        callback();
      }

      if (config.notify) {
        // show growl notify
        growl('task finished!', {
           sticky: false,
           title: 'Cronzitto:',
           image: path.join(base, '..', 'assets', 'growl-icon.png')
        });
      }

      if (config.beep) {
        // play sound ./assets/beep.mp3
        beep.sound(sound);
      }
    }, convertedTimer);

  };

  function convertStringTimerToMiliseconds (timer) {
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
  }

  exports.config = config;
})();
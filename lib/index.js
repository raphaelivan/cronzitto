'use strict';

;(function() {
  var
      log     = require('pretty-log')
    , Event   = require('./event').Event
    , growl   = require('growl')
    , path    = require('path')
    , base    = __dirname
    , config  = { notify: true, beep: true }
    , beep    = require('beep').Beep()
    , sound   = path.join(base, '..', 'assets', 'beep.mp3')
    , convert = require('./util').convert;

  exports.watch = function (callback, timer) {
    var convertedTimer;

    if (typeof setInterval !== 'function') {
      log.error('OOPS! Something\'s gone wrong.');
      return;
    }

    convertedTimer = convert(timer);

    return new Event(callback, convertedTimer, config.notify);
  };


  exports.once = function (callback, sleep) {
    var convertedTimer;

    if (typeof setTimeout !== 'function') {
      log.error('OOPS! Something\'s gone wrong. ');
      return;
    }

    convertedTimer = convert(sleep);

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

  exports.config = config;
})();
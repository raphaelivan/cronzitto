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
    if (typeof setInterval !== 'function') {
      log.error('OOPS! Something\'s gone wrong.');
      return;
    }

    return new Event(callback, timer, config.notify);
  };


  exports.once = function (callback, sleep) {
    if (typeof setTimeout !== 'function') {
      log.error('OOPS! Something\'s gone wrong. ');
      return;
    }

    setTimeout(function () {
      if (typeof callback === 'function') {
        callback.call();
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
      };
    }, sleep);

  };

  exports.config = config;
})();
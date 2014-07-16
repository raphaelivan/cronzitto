'use strict';

;(function() {
  var
      log    = require('pretty-log')
    , Event  = require('./event').Event
    , growl  = require('growl')
    , path   = require('path')
    , base   = __dirname
    , config = { notify: true };

  exports.watch = function (callback, timer) {
    if (typeof setInterval !== 'function') {
      log.error('OOPS!');
      return;
    }

    return new Event(callback, timer, config.notify);
  };


  exports.once = function (callback, sleep) {
    if (typeof setTimeout !== 'function') {
      log.error('OOPS!');
      return;
    }

    setTimeout(function () {
      if (typeof callback === 'function') {
        callback.call();
      }

      if (config.notify) {
        growl('task finished!', {
           sticky: false,
           title: 'Cronzitto:',
           image: path.join(base, '..', 'assets', 'growl-icon.png')
        });
      }
    }, sleep);

  };

  exports.config = config;
})();
'use strict';

;(function () {
  var
      growl = require('growl')
    , path  = require('path')
    , base  = __dirname
    , convert = require('./util').convert;

  function Event (callback, timer, notify) {
    var ID;

    this.timer = function () {
      return timer;
    };

    this.action = function () {
      return callback;
    };

    this.resetTimer = function (t) {
      timer = convert(t);
      clearInterval(ID);
      generate();
    };

    this.stop = function () {
      clearInterval(ID);

      if (notify) {
        growl('task stopped!', {
           sticky: false,
           title: 'Cronzitto:',
           image: path.join(base, '..', 'assets', 'growl-icon.png')
        });
      }
    };

    this.sleep = function (timer) {
      var
          self = this
        , convertedTime = convert(timer);

      clearInterval(ID);

      setTimeout(function () {
        if (typeof self.action() === 'function') {
          ID = setInterval(self.action(), self.timer());
        }

      }, convertedTime);
    };

    function generate(){
      (function (){
        ID = setInterval(callback, timer);
      }());
    }


    generate();
  }

  exports.Event = Event;
})();
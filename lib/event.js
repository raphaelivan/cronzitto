'use strict';

;(function () {
  var
      growl = require('growl')
    , path  = require('path')
    , base  = __dirname;

  function Event (callback, timer, notify) {
    var ID;

    this.timer = function () {
      return timer;
    };

    this.action = function () {
      return callback;
    };

    this.resetTimer = function (t) {
      timer = t;
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
      var self = this;

      clearInterval(ID);

      setTimeout(function () {
        if (typeof self.action() === 'function') {
          ID = setInterval(self.action(), self.timer());
        }

      }, timer);
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
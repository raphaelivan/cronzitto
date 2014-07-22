'use strict';

;(function () {
  var
      growl = require('growl')
    , path  = require('path')
    , base  = __dirname;

  function Event (callback, timer, notify) {
    var ID;

    var generate = function(){
      (function (){
        ID = setInterval(callback, timer);
      }());
    };

    this.timer = function () {
      return timer;
    };

    this.action = function () {
      return callback;
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


    generate();
  }

  exports.Event = Event;
})();
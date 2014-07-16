'use strict';

;(function () {
  var
      growl = require('growl')
    , path  = require('path')
    , base  = __dirname;

  function Event (callback, timer, notify) {

    var ID = setInterval(callback, timer);

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
  }

  exports.Event = Event;
})();
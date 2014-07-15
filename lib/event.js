'use strict';

;(function () {
  function Event (callback, timer) {

    var ID = setInterval(callback, timer);

    this.stop = function () {
      clearInterval(ID);
    };
  }

  exports.Event = Event;
})();
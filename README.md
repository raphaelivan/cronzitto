Cronzitto
================================

## Usage
```js
  var Cron = require('cronzitto');
  var c = Cron.watch( function() {
    // Mail.getAll();
  }, 5000);
```

Stop event
```js
  c.stop();
```

Cron.once( function() {

}, 1000);

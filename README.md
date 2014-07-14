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

Only once
```js
Cron.once( function() {
  # run after a second
}, 1000);
```

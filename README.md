Cronzitto
================================
Cronzitto allows you to schedule tasks to run

## Install
First of all, make sure you have [Node.js](http://nodejs.org/) installed.

```bash
  $ [sudo] npm install cronzitto
```

## Usage
```js
var Cron = require('cronzitto');
```

### Run a task every time interval
```js
  var watchMail = Cron.watch( function() {
    //Mail.getAll();
  }, 5000);
```
The watch method accepts two parameters: the callback and timer.

**The timer must be in miliseconds**

### Stop event
To cancel a cronzitto event, use the stop method

```js
  watchMail.stop();
```

### Only once
Perform a task only once after the end of the timer.

```js
Cron.once( function() {
  //run after a second
}, 1000);
```

## License
Cronzitto is available under the [MIT license](http://opensource.org/licenses/MIT).
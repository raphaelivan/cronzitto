Cronzitto
================================
Cronzitto allows you to schedule tasks to run.

[![NPM](https://nodei.co/npm/cronzitto.png)](https://nodei.co/npm/cronzitto/)

## Install
First of all, make sure you have [Node.js](http://nodejs.org/) installed.

```bash
  $ [sudo] npm install cronzitto
```

## Usage
Require cronzitto module

```js
var Cron = require('cronzitto');
```

### Watch an event
```js
  var watchMail = Cron.watch( function() {
    //Mail.getAll();
  }, '10 minutes');
```
The watch method accepts two parameters: the callback and timer.

### Cancel an event
To cancel a cronzitto event, use the cancel method

```js
  watchMail.cancel();
```

### Reset an event time
Reset the execution time.

```js
  watchMail.resetTimer('30 minutes');
```

### Sleep
Wait a while to continue execution
```js
  watchMail.sleep('5 minutes');
```

### Execute only once
Perform a task only once, after the end of the timer.
```js
  Cron.once( function() {
    //run after a minute
  }, '1 minute');
```

### Notify
You can receive notifications when the task finishes or is stopped.

**Requirements!**
To use Growl notifications, you need to install [node-growl](https://github.com/visionmedia/node-growl#install).

### Non-Notify
To disable the notifications engine, set the Cronzitto:

```js
  Cron.config.notify = false;
```

### Non-Beep
To disable the BEEP sound:

```js
  Cron.config.beep = false;
```

## License
Cronzitto is available under the [MIT license](http://opensource.org/licenses/MIT).

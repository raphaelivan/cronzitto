Cronzitto
================================
Cronzitto allows you to schedule tasks to run

[![NPM](https://nodei.co/npm/cronzitto.png)](https://nodei.co/npm/cronzitto/)

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
  }, '10 minutes');
```
The watch method accepts two parameters: the callback and timer.

**The timer must be in miliseconds**

### Stop event
To cancel a cronzitto event, use the stop method

```js
  watchMail.stop();
```

### Reset Time
```js
  watchMail.resetTimer('30 minutes');
```

### Sleep
Waiting time to continue execution(miliseconds)
```js
watchMail.sleep('5 minutes');
```

### Only once
Perform a task only once after the end of the timer.

```js
Cron.once( function() {
  //run after a second
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
To disable the sound 'beep.mp3':

```js
  Cron.config.beep = false;
```


## License
Cronzitto is available under the [MIT license](http://opensource.org/licenses/MIT).
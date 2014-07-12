Cronzitto
================================

## Usage
var Cron = require('cronzitto');

Cron.watch( function() {
  console.log("Event");
}, 5000);

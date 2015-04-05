# repeat-stream
Stream that just repeats all input

## Install

``` bash
npm install --save repeat-stream
```

## Use

``` javascript
var repeatStream = require("repeat-stream");

var stream = repeatStream();

something.pipe(stream);
something_else.pipe(stream);

stream.pipe(process.stdout);

// Or, if you're using object streams:
var stream2 = repeatStream.obj();
```

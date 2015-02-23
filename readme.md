#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Run a promised func sequencing by following order of params. This is inspired by [Q promise로 차례대로 비동기작업 실행하기 :: Outsider's Dev Story](http://goo.gl/Je3d8n)


## Install

```sh
$ npm install --save next-promise
```


## Usage

```js
var next = require('next-promise');
var exec = require('exec-then');
var cmds = [
  'ls',
  'pwd',
  'echo $PATH'
];

next(cmds, exec, function(res) {
  console.log(res.stdout);
}).then(function() {
  console.log('done');
});

```


## License

MIT © [ragingwind](http://ragingwind.me)


[npm-url]: https://npmjs.org/package/next-promise
[npm-image]: https://badge.fury.io/js/next-promise.svg
[travis-url]: https://travis-ci.org/ragingwind/next-promise
[travis-image]: https://travis-ci.org/ragingwind/next-promise.svg?branch=master
[daviddm-url]: https://david-dm.org/ragingwind/next-promise.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/ragingwind/next-promise

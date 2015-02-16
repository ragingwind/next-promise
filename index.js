'use strict';

var q = require('q');

function nextPromise(list, startWith, delegate, predicate) {
  if (typeof startWith === 'function') {
    predicate = delegate;
    delegate = startWith;
    startWith = 0;
  }

  if (startWith >= list.length) {
    return new Error('startWith is out of index');
  }

  function next(i) {
    console.log(i, list.length);
    if (list.length <= i) {
      return q(true);
    }

    return delegate(list[i]).then(function(res) {
      if (predicate) {
        predicate(res, i, list[i]);
      }

      return next(i + 1);
    })
  }

  return next(startWith);
}

module.exports = nextPromise;

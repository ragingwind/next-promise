/*global describe, it */
'use strict';
var assert = require('assert');
var next = require('../');
var exec = require('child_process').exec;
var q = require('q');

var cmds = [
  'ls',
  'pwd',
  'echo $PATH'
];

function promisedExec(cmd) {
	var deferrer = q.defer();

  exec(cmd, function(err, stdout, stderr) {
    var res = {
      err: err,
      stdout: stdout,
      stderr: stderr
    };
    deferrer[err ? 'reject' : 'resolve'](res);
  });

  return deferrer.promise;
}

describe('next-promise node module', function () {
  it('should count three', function () {
    var count = 0;
    return next(cmds, promisedExec, function(res) {
      count++;
    }).then(function() {
      assert.equal(count, 3);
    });
  });

  it('should makes some noise', function () {
    return next(cmds, promisedExec, function(res) {
      throw new Error('Hey!!');
    }).then(function() {
      assert(false);
    }, function() {
      assert(true);
    });
  });
});





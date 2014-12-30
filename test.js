/*!
 * ext-regex <https://github.com/regexps/ext-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var re = require('./');

it('should match a file extension:', function () {
  assert.equal(re().exec('.md')[0], '.md');
  assert.equal(re().exec('.md')[1], 'md');
  assert.equal(re().exec('abc.md')[0], '.md');
  assert.equal(re().exec('abc.md')[1], 'md');
});

it('should not match a double extension:', function () {
  assert.equal(re().exec('abc.min.js')[0], '.js');
  assert.equal(re().exec('abc.min.js')[1], 'js');
});

it('should match a dotfile:', function () {
  assert.equal(re().exec('abc/.gitignore')[0], '.gitignore');
  assert.equal(re().exec('abc/.gitignore')[1], 'gitignore');
});

it('should match a double extension when `last: true`:', function () {
  assert.equal(re(true).exec('abc.min.js')[0], '.min.js');
  assert.equal(re(true).exec('abc.min.js')[1], 'min.js');
  assert.equal(re(true).exec('abc.foo.min.js')[0], '.foo.min.js');
  assert.equal(re(true).exec('abc.foo.min.js')[1], 'foo.min.js');
  assert.equal(re(true).exec('a/.b/abc.foo.min.js')[0], '.foo.min.js');
  assert.equal(re(true).exec('a/.b/abc.foo.min.js')[1], 'foo.min.js');
});

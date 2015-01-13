/*!
 * ext-regex <https://github.com/regexps/ext-regex>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var re = require('./');

function match(str) {
  return str.match(re());
}

it('should match a file extension:', function () {
  assert.equal(re().test('.md'), true);
  assert.equal(match('.md')[0], '.md');
  assert.equal(match('.md')[1], '.md');
  assert.equal(match('.md')[2], 'md');
  assert.equal(match('abc.md')[0], '.md');
  assert.equal(match('abc.md')[1], '.md');;
  assert.equal(match('abc.md')[2], 'md');
});

it('should not match if no extension is found:', function () {
  assert.equal(re().test('abc'), false);
  assert.equal(match(''), null);
  assert.equal(match('abc'), null);
  assert.equal(match('a/b/c'), null);
});

it('should match multiple extensions:', function () {
  assert.equal(match('a/b/c/foo.bar.abc.min.js')[0], '.bar.abc.min.js');
  assert.equal(match('a/b/c/foo.bar.abc.min.js')[1], '.js');
  assert.equal(match('a/b/c/foo.bar.abc.min.js')[2], 'js');
  assert.equal(match('a/b/c/bar.abc.min.js')[0], '.abc.min.js');
  assert.equal(match('a/b/c/bar.abc.min.js')[1], '.js');
  assert.equal(match('a/b/c/bar.abc.min.js')[2], 'js');
  assert.equal(match('a/b/c/abc.min.js')[0], '.min.js');
  assert.equal(match('a/b/c/abc.min.js')[1], '.js');
  assert.equal(match('a/b/c/abc.min.js')[2], 'js');
  assert.equal(match('abc.min.js')[0], '.min.js');
  assert.equal(match('abc.min.js')[1], '.js');
  assert.equal(match('abc.min.js')[2], 'js');
});

it('should work with dirnames that have dots:', function () {
  assert.equal(re().test('a/b/c.d.e/'), false);
  assert.equal(re().test('a/b/c.d.e/f.js'), true);
  assert.equal(match('a/b/c.d.e/f.js')[0], '.js');
  assert.equal(match('a/b/c.d.e/'), null);
});

it('should match a dotfile:', function () {
  assert.equal(re().test('.gitignore'), true);
  assert.equal(match('.gitignore')[0], '.gitignore');
  assert.equal(match('.gitignore')[1], '.gitignore');
  assert.equal(match('.gitignore')[2], 'gitignore');
  assert.equal(match('abc/.gitignore')[0], '.gitignore');
  assert.equal(match('abc/.gitignore')[1], '.gitignore');
  assert.equal(match('abc/.gitignore')[2], 'gitignore');
});

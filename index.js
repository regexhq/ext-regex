/*!
 * ext-regex <https://github.com/regexps/ext-regex>
 *
 * Copyright (c) 2014 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function extRegex() {
  return /(?=\.)(\.([^\\\/.]*))*$/;
};

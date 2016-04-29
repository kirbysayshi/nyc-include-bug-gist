// tools/require-extensions/hbs.js
var fs = require('fs');
var hbsfy = require('hbsfy');

require.extensions['.hbs'] = function (module, filename) {
  console.log('HBS!', filename);
  var file = fs.readFileSync(filename, "utf8");
  var opts = { traverse: true };
  return module._compile(hbsfy.compile(file, opts), filename);
}
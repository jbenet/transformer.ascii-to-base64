var transformer = require('dat-transformer');
var tAscii = transformer('ascii');
var tBase64 = transformer('base64');
// require any other modules you may need here.

module.exports = transformer.Conversion(tAscii, tBase64, convert);

function convert(ascii) {
  var buf = new Buffer(ascii, 'ascii');
  return buf.toString('base64');
}

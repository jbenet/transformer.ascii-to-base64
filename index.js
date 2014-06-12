var Conversion = require('transformer-conversion');
var tAscii = require('transformer.ascii');
var tBase64 = require('transformer.base64');
// require any other modules you may need here.

module.exports = Conversion(tAscii, tBase64, convert);

function convert(ascii) {
  var buf = new Buffer(ascii, 'ascii');
  return buf.toString('base64');
}

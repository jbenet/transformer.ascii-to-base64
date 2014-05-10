# transformer.ascii-to-base64

[Transformer](http://github.com/jbenet/transformer) conversion: ascii to base64

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Commandline

```
> echo '<SAMPLE INPUT>' | transform ascii base64
<SAMPLE OUTPUT>
```

### Javascript

```js
var transformer = require('dat-transformer');
var tAsciiToBase64 = transformer('ascii', 'base64');
tAsciiToBase64('<SAMPLE INPUT>'); // <SAMPLE OUTPUT>
```

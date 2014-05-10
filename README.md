# transformer.ascii-to-base64

[Transformer](http://github.com/jbenet/transformer) conversion: ascii to base64

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Commandline

```
> echo 'beep boop' | transform ascii base64
YmVlcCBib29w
```

### Javascript

```js
var transformer = require('dat-transformer');
var tAsciiToBase64 = transformer('ascii', 'base64');
tAsciiToBase64('beep boop'); // 'YmVlcCBib29w'
```

# proquint

Convert buffers to and from the "proquint" pronouncable representation.

[![travis](https://travis-ci.org/dominictarr/pronounceable-binary.png?branch=master)
](https://travis-ci.org/dominictarr/pronounceable-binary)

[![testling](http://ci.testling.com/dominictarr/pronounceable-binary.png)
](http://ci.testling.com/dominictarr/pronounceable-binary)

I wrote this on the plane not realizing that @deoxxa already had written the npm module.
[proquint](https://github.com/deoxxa/proquint) except that his implementation is not
compliant to the spec, given 


## examples

### 1. hash your public key

``` js
var crypto = require('crypto')
var fs = require('fs')

var pubkey = fs.readFileSync(process.env.HOME + '/.ssh/id_rsa.pub')
var hash = crypto.creatHash('sha256').update(pubkey).digest()

var proquint = require('proquint')
console.log(proquint.encode(hash))
```

running this script will generate 8 hyphenated words,
that are relatively easy to pronounce. Memorize this.
Get your friends and famility to address you by this name.

### 2. have your name legally changed.

I recommend having your name legally changed to your
proquint pronouncable hash. This strongly depends on the
the country you are geolocated within,
and is out of scope of this documentation.

## License

MIT

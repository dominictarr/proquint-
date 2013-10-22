# proquint

convert buffers to and from the "proquint" pronouncable representation

[![travis](https://travis-ci.org/dominictarr/pronounceable-binary.png?branch=master)
](https://travis-ci.org/dominictarr/pronounceable-binary)

[![testling](http://ci.testling.com/dominictarr/pronounceable-binary.png)
](http://ci.testling.com/dominictarr/pronounceable-binary)

## examples

Generate a pronouncable representation of your public key.

``` js
var crypto = require('crypto')
var fs = require('fs')

var pubkey = fs.readFileSync(process.env.HOME + '/.ssh/id_rsa.pub')
var hash = crypto.creatHash('sha').update(pubkey).digest()

var proquint = require('proquint')
console.log(proquint.encode(hash))
```

## License

MIT

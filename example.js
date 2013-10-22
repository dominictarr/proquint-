var crypto = require('crypto')
var fs = require('fs')

var pubkey = fs.readFileSync(process.env.HOME + '/.ssh/id_rsa.pub')
var hash = crypto.createHash('sha').update(pubkey).digest()

var proquint = require('./')

console.log(proquint.encode(hash))


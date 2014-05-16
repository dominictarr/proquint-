var tape = require('tape')
var crypto = require('crypto')

var proquint = require('../')
var examples = [
    ['127.0.0.1',       'lusab-babad'],
    ['63.84.220.193',   'gutih-tugad'],
    ['63.118.7.35',     'gutuk-bisog'],
    ['140.98.193.141',  'mudof-sakat'],
    ['64.255.6.200',    'haguz-biram'],
    ['128.30.52.45',    'mabiv-gibot'],
    ['147.67.119.2',    'natag-lisaf'],
    ['212.58.253.68',   'tibup-zujah'],
    ['216.35.68.215',   'tobog-higil'],
    ['216.68.232.21',   'todah-vobij'],
    ['198.81.129.136',  'sinid-makam'],
    ['12.110.110.204',  'budov-kuras'],
].map(function (e) {
  return [new Buffer(e[0].split('.').map(Number)), e[1]]
})

tape('encode', function (t) {

  examples.forEach(function (e) {
    t.equal(proquint.encode(e[0]), e[1])
  })

  t.end()

})

tape('decode', function (t) {
  examples.forEach(function (e) {

    t.deepEqual(proquint.decode(e[1]), e[0])

  })
  t.end()
})

tape('encode(decode(random))', function (t) {
  var rand = crypto.randomBytes(1024)
  t.deepEqual(proquint.decode(proquint.encode(rand)), rand)
  t.end()
})

var bops = require('bops')

    
var consonants = 'bdfghjklmnprstvz'
//'bcdfghjklmnpqrst' //vwxyz'
var vowels = 'aiou'
//    0 1 2 3 4 5 6 7 8 9 A B C D E F
//    b d f g h j k l m n p r s t v z

exports.encode = toLetters
exports.decode = toBinary

function toLetters (b) {
  var s = ''
  for(var i = 0; i < b.length; i += 2) {
    var word = b[i] << 8 | b[i + 1]
    function Const () {
      var c = (word & 0xF000) >> 12
      word = word << 4
      return consonants[c]
    }
    function Vowel () {
      var c = (word & 0xC000) >> 14
      word = word << 2
      return vowels[c]
    }
    s += (!i ? '' : i%4 ? '-' : ' ') + Const() + Vowel() + Const() + Vowel() + Const()
  }
  return s
}

function toBinary (s) {
  s = s.replace(/[- ]/, '')
  var b = bops.create((s.length / 5) * 2)
  var word = 0
  function con (s) {
    word = word << 4 | consonants.indexOf(s)
  }
  function vo (s) {
    word = word << 2 | vowels.indexOf(s)
  }

  var i = 0
  while(s.length) {
    word = 0
    var a = s.substring(0, 5)
    con(a[0]); vo(a[1]); con(a[2]); vo(a[3]); con(a[4])
    b[i++] = word >> 8
    b[i++] = word & 0xff
    s = s.substring(5)
  }
  return b
}


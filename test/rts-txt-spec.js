var assert = require('assert'),
  fs = require('fs')

describe('rts.txt', function () {
  it('should have less than 133 chars', function () {
    // 140 - 'RT @a: '
    var rts = []
    fs.readFile(process.env.PWD + '/rts.txt', 'utf-8', function (err, data) {
      if (err) throw err
      rts = data.split(/\r?\n/)
      for (var i = 0; i < rts.length; i++)
        assert(rts[i].length <= 133, rts[i])
    })
  })
})

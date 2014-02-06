var fs = require('fs'),
  rts = []

function RTProvider() {
  fs.readFile(process.env.PWD + '/rts.txt', 'utf-8', function (err, data) {
    if (err) throw err
    console.log('loading tweets...')
    rts = data.split(/\r?\n/)
  })
}

var randomNumber = function (limit) {
  return Math.floor(Math.random() * (limit - 1))
}

RTProvider.prototype.random = function (user) {
  var rt = rts[randomNumber(rts.length)]
  return 'RT @' + user + ': ' + rt
}

exports.RTProvider = RTProvider

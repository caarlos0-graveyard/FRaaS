var fs = require('fs'),
  rts = []

function RTProvider() {
  fs.readFile(process.env.PWD + '/rts.txt', 'utf-8', function (err, data) {
    if (err) throw err
    rts = data.split(/\r?\n/)
  })
}

var randomNumber = function (limit) {
  return Math.floor(Math.random() * (limit - 1))
}

RTProvider.prototype.random = function () {
  var id = randomNumber(rts.length),
    rt = rts[id]
  return {
    text: rt,
    id: id
  }
}

RTProvider.prototype.find = function (id) {
  return {
    text: rts[id],
    id: id
  }
}

exports.RTProvider = RTProvider

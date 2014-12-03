var express = require('express'),
  app = express(),
  mustacheExpress = require('mustache-express'),
  RTProvider = require('./lib/rt-provider').RTProvider,
  provider = new RTProvider(),
  port = process.env.PORT || 4567

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.get('/', function (req, res) {
  console.log('GET /')
  res.render('index')
})

app.get('/:user/:id?', function (req, res) {
  console.log('GET /:user/:id?')
  var user = req.params.user,
    rtId = req.params.id,
    rt = rtId ? provider.find(rtId) : provider.random(user)
  res.render('rt', {
    user: user,
    rt: rt.text,
    id: rt.id,
    encRt: encodeURIComponent('RT @' + user + ': ' + rt.text)
  })
})

console.log('Starting server on port ' + port + '...')
app.listen(port)

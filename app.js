var express = require('express'),
  app = express(),
  RTProvider = require('./lib/rt-provider').RTProvider,
  provider = new RTProvider()

app.get('/:user', function (req, res) {
  res.send(provider.random(req.params.user))
})

app.listen(process.env.PORT || 4567)

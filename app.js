var express = require('express'),
  app = express(),
  mustacheExpress = require('mustache-express'),
  RTProvider = require('./lib/rt-provider').RTProvider,
  provider = new RTProvider()


app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/:user', function (req, res) {
  var user = req.params.user,
    rt = provider.random(user)
  res.render('rt', {user: user, rt: rt})
})

app.listen(process.env.PORT || 4567)

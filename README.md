[FRaaS][fraas] [![Build Status](http://img.shields.io/travis/caarlos0/FRaaS/master.svg?style=flat)](https://travis-ci.org/caarlos0/FRaaS)[![Code Climate](http://img.shields.io/codeclimate/github/caarlos0/FRaaS.svg?style=flat)](https://codeclimate.com/github/caarlos0/FRaaS)[![Coverage Status](http://img.shields.io/coveralls/caarlos0/FRaaS/master.svg?style=flat)](https://coveralls.io/r/caarlos0/FRaaS?branch=master)
=====

[Fake RT as a Service (FRaaS)][fraas] is a service to provide fake
shameful tweet messages to make fun with your friends. This was
already a thing in a friends circle, but, well, it was 100% manual:

1. find a very ridiculous quote;
2. copy it to twitter;
3. reference the friend and put a 'RT' prefix.

This service helps people. Just access the service and put you friend's username,
it will give you a random ridiculous quote, and all you have to to is to
click a button.


## Contributing

- You can add some shameful music and poems quotes to the `rts.txt` file,
travis-ci will run it and deploy automatically (when on master);
- The rest is plain onld node.js + express as usual.

[fraas]: http://fraas.herokuapp.com

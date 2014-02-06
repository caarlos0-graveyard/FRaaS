var assert = require('assert'),
  RTProvider = require(process.env.PWD + '/lib/rt-provider.js').RTProvider

describe('RTProvider', function () {
  it('should be instantiable', function () {
    assert.equal(typeof RTProvider, 'function')
    assert(new RTProvider() instanceof RTProvider)
  })

  describe('#random', function () {
    var provider = new RTProvider()
    it('should be a function', function () {
      assert.equal(typeof provider.random, 'function')
    })

    it('should return something', function () {
      var rt = provider.random('a')
      assert(rt.length > 0)
      assert(rt !== 'RT a:')
    })
  })
})

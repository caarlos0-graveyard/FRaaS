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

    it('should return a valid rt', function () {
      var rt = provider.random()
      assert(rt !== null)
      assert(rt.text.length > 0)
      assert(rt.id > -1)
    })
  })

  describe('#find', function () {
    var provider = new RTProvider()
    it('should be a function', function () {
      assert.equal(typeof provider.find, 'function')
    })

    it('should return a valid rt', function () {
      var rt = provider.find(1)
      assert(rt !== null)
      assert(rt.text.length > 0)
      assert(rt.id === 1)
    })
  })
})

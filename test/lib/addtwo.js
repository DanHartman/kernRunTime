const expect = require('chai').expect;
const addTwo = require('../../lib/add_two');

describe('addTwo', function () {

  it('should add two to a number', function () {
    expect(addTwo(2)).to.equal(4);
  });

});
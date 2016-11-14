const expect = require('chai').expect;
const parseSeconds = require('../../lib/parse_seconds');

describe('parseSeconds', function () {
  
  it('should convert string duration format to integer seconds', function () {
    expect(parseSeconds('0:13:28')).to.equal(808);
    expect(parseSeconds('0:15:36')).to.equal(936);
    expect(parseSeconds('1:45:36')).to.equal((1*3600)+(45*60)+36);
    expect(parseSeconds('0:15:34')).to.equal(934);
    expect(parseSeconds('0:66:36')).to.equal(3996);
    expect(parseSeconds('0:15:06')).to.equal(906);
  });

  it('should throw if anything other than a string is provided', function (){
    expect(function() {
      parseSeconds([]);
    }).to.throw(/Expected a string/);
  });
  
});
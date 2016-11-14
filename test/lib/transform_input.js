const expect = require('chai').expect;
const transformInput = require('../../lib/transform_input');

describe('transformInput', function () {

  const testInput = [
    '09/29/2016',
    '10:43:50',
    '0:06:59',
    'Image',
    'C:\\My Documents\\KcamEMF\\temp.pdf_EMF.EMF'
  ];
  
  it('should convert input from csv to object in our format', function () {
    expect(transformInput(testInput)).to.deep.equal({
      date: '09/29/2016',
      duration: 419
    });
  });
});
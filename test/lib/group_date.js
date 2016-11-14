const expect = require('chai').expect;
const group_date = require('../../lib/group_date');




describe('group_date', function () {

  const input = [
    ['09/29/2016', '10:43:50', '1:06:59', 'Image', 'C:\\My Documents\\KcamEMF\\temp.pdf_EMF.EMF'],
    ['09/29/2016', '10:43:50', '0:01:59', 'Image', 'C:\\My Documents\\KcamEMF\\temp.pdf_EMF.EMF'],
    ['10/29/2016', '10:43:50', '0:16:59', 'Image', 'C:\\My Documents\\KcamEMF\\temp.pdf_EMF.EMF'],
    ['10/27/2016', '10:43:50', '0:07:59', 'Image', 'C:\\My Documents\\KcamEMF\\temp.pdf_EMF.EMF']
  ];
  const expectedOut = {
    '09/29/2016': ((1*3600)+(6*60)+59) + ((0*3600)+(1*60)+59),
    '10/29/2016': ((0*3600)+(16*60)+59),
    '10/27/2016': ((0*3600)+(7*60)+59)
  };
  
  it('should return something because dates matched', function () {
    const result = group_date(input);
    expect(result).to.deep.equal(expectedOut);
  });
});

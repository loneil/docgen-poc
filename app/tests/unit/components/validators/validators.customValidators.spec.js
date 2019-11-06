const helper = require('../../../common/helper');

const { customValidators } = require('../../../../src/components/validators');

helper.logHelper();

describe('customValidators.docGen', () => {
  let body;

  beforeEach(() => {
    body = {
      context: {
        x: 1,
        y: 2
      },
      template: {
        content: 'ZHNmc2Rmc2RmZHNmc2Rmc2Rmc2Rm',
        contentEncodingType: 'base64'
      }
    };
  });

  it('should return an empty error array when valid', async () => {
    const result = await customValidators.docGen(body);
    console.log(result);

    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toEqual(0);
  });

  it('should return an error with validation error when invalid', async () => {
    body.context = 'garbage';

    const result = await customValidators.docGen(body);

    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toEqual(1);
    expect(result[0].value).toMatch('garbage');
    expect(result[0].message).toMatch('Invalid value `context`.');
  });
});

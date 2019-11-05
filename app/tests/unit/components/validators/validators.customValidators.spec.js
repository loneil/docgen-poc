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
    };
  });

  it('should return an empty error array when valid', () => {
    const result = customValidators.docGen(body);

    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toEqual(0);
  });

  it('should return an error with validation error when invalid', () => {
    body.context = 'garbage';

    const result = customValidators.docGen(body);

    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toEqual(1);
    expect(result[0].value).toMatch('garbage');
    expect(result[0].message).toMatch('Invalid value `context`.');
  });
});

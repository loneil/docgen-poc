const helper = require('../../../common/helper');

const { models } = require('../../../../src/components/validators');

helper.logHelper();

describe('models.docGen.context', () => {

  it('should return true for a valid context object', () => {
    const value = { firstName: 'x', lastName: 'y' };
    const result = models.docGen.context(value);
    expect(result).toBeTruthy();
  });

  it('should return true for a empty context object', () => {
    const value = { };
    const result = models.docGen.context(value);
    expect(result).toBeTruthy();
  });

  it('should return false for undefined', () => {
    const value = undefined;
    const result = models.docGen.context(value);
    expect(result).toBeFalsy();
  });

  it('should return false for a string', () => {
    const value = 'test';
    const result = models.docGen.context(value);
    expect(result).toBeFalsy();
  });

  it('should return false for an array', () => {
    const value = [1, 3];
    const result = models.docGen.context(value);
    expect(result).toBeFalsy();
  });
});


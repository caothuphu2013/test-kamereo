import { isValidPhone } from './validation';

describe('Validation', () => {
  it('should return true when valid phone', () => {
    expect(isValidPhone('1-645-596-3003')).toEqual(true);
  });
  it('should return false when invalid phone', () => {
    expect(isValidPhone('1-645')).toEqual(false);
  })
})
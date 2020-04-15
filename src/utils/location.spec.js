import { getStreetAddressByAddress } from './location';

describe('Location', () => {
  it('should return street address exactly', () => {
    expect(getStreetAddressByAddress('8305 Reggie Village, Yonkers, New York')).toEqual('8305 Reggie Village');
  });

  it('should not return street address exactly', () => {
    expect(getStreetAddressByAddress('8305 Reggie Village, Yonkers, New York')).toEqual('8305 Reggie');
  });
})
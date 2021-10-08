const sweety = require('../../util/sweety');

describe('sweety', () => {
  it('converts number mojo to sweety', () => {
    const result = sweety.mojo_to_sweety(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to sweety', () => {
    const result = sweety.mojo_to_sweety('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to sweety string', () => {
    const result = sweety.mojo_to_sweety_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to sweety string', () => {
    const result = sweety.mojo_to_sweety_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number sweety to mojo', () => {
    const result = sweety.sweety_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string sweety to mojo', () => {
    const result = sweety.sweety_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = sweety.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = sweety.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = sweety.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = sweety.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = sweety.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = sweety.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});

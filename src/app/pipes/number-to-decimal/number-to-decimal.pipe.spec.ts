import { NumberToDecimalPipe } from './number-to-decimal.pipe';

describe('NumberToDecimalPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberToDecimalPipe();
    expect(pipe).toBeTruthy();
  });
});

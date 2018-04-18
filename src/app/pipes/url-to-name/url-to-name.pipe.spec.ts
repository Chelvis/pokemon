import { UrlToNamePipe } from './url-to-name.pipe';

describe('UrlToNamePipe', () => {
  it('create an instance', () => {
    const pipe = new UrlToNamePipe();
    expect(pipe).toBeTruthy();
  });
});

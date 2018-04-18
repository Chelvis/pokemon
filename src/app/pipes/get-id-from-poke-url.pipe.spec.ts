import { GetIdFromPokeUrlPipe } from './get-id-from-poke-url.pipe';

describe('GetIdFromPokeUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new GetIdFromPokeUrlPipe();
    expect(pipe).toBeTruthy();
  });
});

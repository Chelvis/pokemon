export class PokemonList {
  count: number;
  previous: string;
  results: Array<{url: string, name: string}>;
  next: string;

  constructor() {
  }

}

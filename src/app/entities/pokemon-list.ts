export class PokemonList {
  count: number;
  previous: string;
  results: Array<{id: number, url: string}>;
  next: string;

  constructor() {
  }

}

export class Pokemon {
  abilities: Array<{
    slot: number,
    is_hidden: boolean,
    ability: {
      url: string,
      name: string
    };
  }>;
  forms: Array<{
    url: string,
    name: string
  }>;
  held_items: any;
  height: number;
  moves: Array<{
    move: {
      name: string
    };
  }>;
  name: string;
  sprites: {
    front_default: string
  };
  stats: Array<{
    stat: {
      name: string;
    };
    effort: number;
    base_stat: number;
  }>;
  types: Array<{
    type: {
      name: string;
    }
  }>;
  weight: number;

  constructor() {
  }

}

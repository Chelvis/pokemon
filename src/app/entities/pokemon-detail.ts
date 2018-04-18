export class Pokemon {
  forms: Array<{
    url: string,
    name: string
  }>;
  abilities: Array<{
    slot: number,
    is_hidden: boolean,
    ability: {
      url: string,
      name: string
    };
  }>;
  name: string;
  weight: number;
  moves: Array<{
    move: {
      name: string
    };
  }>;
  sprites: {
    front_default: string
  };
  held_items: any;
  height: 7;
  constructor() {
  }

}

import { GetIdFromPokeUrlPipe } from './../../pipes/get-id-from-poke-url.pipe';
import { Pokemon } from './../../entities/pokemon-detail';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: Pokemon;

  constructor(pokemon: Pokemon) { }

  ngOnInit() {
  }

}

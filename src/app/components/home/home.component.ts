import { PokemonList } from './../../entities/pokemon-list';
import { CatchThemAllService } from './../../services/catch-them-all/catch-them-all.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemonList: PokemonList;
  pokemonListResults: any;

  constructor(private catchThemAllService: CatchThemAllService) { }

  ngOnInit() {
    this.catchThemAllService.catchList().subscribe((data: PokemonList) => {
      this.pokemonList = data;
      console.log(this.pokemonList.results);
      this.pokemonListResults = this.pokemonList.results;
    }, error => {
      console.log('Error when listing pokémons', error);
    });
  }

  catchPokemon(id: number) {

  }

}

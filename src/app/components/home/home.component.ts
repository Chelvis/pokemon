import { PokemonList } from './../../entities/pokemon-list';
import { CatchThemAllService } from './../../services/catch-them-all/catch-them-all.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private catchThemAllService: CatchThemAllService) { }

  pokemonLists: any;
  pokemonList: any;

  ngOnInit() {
    this.catchThemAllService.catchList().subscribe((data: PokemonList[]) => {
      this.pokemonLists = data;
      this.pokemonList = this.pokemonLists.results;
    }, error => {
      console.log('Error when listing pokémons', error);
    });
  }



}

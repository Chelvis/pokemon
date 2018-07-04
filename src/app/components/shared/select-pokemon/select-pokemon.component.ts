import { Component, OnInit, Input } from '@angular/core';

import { AppComponent } from '../../../app.component';

import { PokemonList } from './../../../entities/pokemon-list';
import { CatchThemAllService } from './../../../services/catch-them-all/catch-them-all.service';

import { GetIdFromPokeUrlPipe } from './../../../pipes/get-id-from-poke-url/get-id-from-poke-url.pipe';
import { UrlToNamePipe } from './../../../pipes/url-to-name/url-to-name.pipe';
import { OrderPipe } from 'ngx-order-pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-pokemon',
  templateUrl: './select-pokemon.component.html',
  styleUrls: ['./select-pokemon.component.scss']
})
export class SelectPokemonComponent implements OnInit {

  pokemonList: PokemonList; // Receberá a lista com todos os pokemons
  pokemonListResults: any; // Será transformada em uma lista legível de pokemons para ser usada na combo

  @Input() selectdPokemon; // Recebe o id do Pokemon sendo exibido pela PokemonDetail

  constructor(
    private appComponent: AppComponent,
    private catchThemAllService: CatchThemAllService,
    private getIdFromPokeUrl: GetIdFromPokeUrlPipe,
    private urlToName: UrlToNamePipe,
    private router: Router,
    private orderPipe: OrderPipe
  ) { }

  ngOnInit() {
    this.runServices();
  }

  // Método que direciona para a página/rota do pokemon selecionado
  catchPokemon(e: any) {
    this.router.navigate([e.id]);
  }

  // Retorna dados dos serviços de API
  runServices() {
    this.appComponent.comboReady = false;
    // Retorna a lista com todos os Pokemons
    this.catchThemAllService.catchList().subscribe((data: PokemonList) => {
      this.pokemonList = data;

      // Transforma o resultado dos pokemons {url,name} em uma array de objetos para construir a combo {id,name}
      let counter = 0;

      const pokemonListResults = this.pokemonList.results.map(obj => {
        const pokemonId = this.getIdFromPokeUrl.transform(obj.url);
        const pokemonName = this.urlToName.transform(obj.name);
        return {id: pokemonId, name: pokemonName, realId: counter++};
      });

      this.pokemonListResults = this.orderPipe.transform(pokemonListResults, 'name');

      this.appComponent.comboReady = true; // Apaga a camada de carregamento
    }, error => {
      console.log('Error when listing pokemons', error);
    });
  }

}

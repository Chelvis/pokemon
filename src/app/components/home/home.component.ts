import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from './../../app-routing.module';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';

import { AppComponent } from '../../app.component';

import { PokemonList } from './../../entities/pokemon-list';
import { CatchThemAllService } from './../../services/catch-them-all/catch-them-all.service';

import { GetIdFromPokeUrlPipe } from './../../pipes/get-id-from-poke-url/get-id-from-poke-url.pipe';
import { UrlToNamePipe } from './../../pipes/url-to-name/url-to-name.pipe';


import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url: any;
  pokemonList: PokemonList;
  pokemonListResults: any;

  constructor(
    private appComponent: AppComponent,
    private catchThemAllService: CatchThemAllService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private getIdFromPokeUrl: GetIdFromPokeUrlPipe,
    private urlToName: UrlToNamePipe
  ) {
    // Executa o método loadPage() ao último evento de troca de rota
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadPage();
      }
      if (event instanceof NavigationStart) {
        this.appComponent.loadingPage = true;
      }
    });
  }

  ngOnInit() {
    this.loadPage();
  }

  // Método que carrega todos os dados da página
  loadPage() {

    // Evita que a troca de rota execute o método loadPage mais de uma vez
    const newUrl = this.activatedRoute.snapshot.url.join('/');
    if (this.url === newUrl) { return; }
    this.url = newUrl;

    this.runServices();
  }

  catchPokemon(e: any) {
    this.router.navigate([e.id]);
  }

  // Retorna dados dos serviços de API
  runServices() {

    // Retorna a lista com todos os Pokemons
    this.catchThemAllService.catchList().subscribe((data: PokemonList) => {
      this.pokemonList = data;
      // this.pokemonListResults = this.pokemonList.results; // Grava apenas a propriedade results da API

      // Transforma o resultado dos pokemons {url,name} em uma array de objetos
      // para construir a combo {id,name}
      this.pokemonListResults = this.pokemonList.results.map(obj => {
        const pokemonId = this.getIdFromPokeUrl.transform(obj.url);
        const pokemonName = this.urlToName.transform(obj.name);
        return {id: pokemonId, name: pokemonName};
      });

      this.appComponent.loadingPage = false; // Apaga a camada de carregamento
    }, error => {
      console.log('Error when listing pokemons', error);
    });
  }

}

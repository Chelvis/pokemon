import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { AppComponent } from '../../app.component';

import { PokemonList } from './../../entities/pokemon-list';
import { CatchThemAllService } from './../../services/catch-them-all/catch-them-all.service';

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
    private router: Router
  ) {
    // Executa o método loadPage() ao último evento de troca de rota
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadPage();
      }
    });
  }

  ngOnInit() {
    this.appComponent.loadingPage = true; // Ascende a camada de carregamento
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

  catchPokemon(id: string) {
    this.router.navigate([id]);
  }

  // Retorna dados dos serviços de API
  runServices() {

    // Retorna a lista com todos os Pokemons
    this.catchThemAllService.catchList().subscribe((data: PokemonList) => {
      this.pokemonList = data;
      this.pokemonListResults = this.pokemonList.results; // Grava apenas a propriedade results da API
      this.appComponent.loadingPage = false; // Apaga a camada de carregamento
    }, error => {
      console.log('Error when listing pokemons', error);
    });
  }

}

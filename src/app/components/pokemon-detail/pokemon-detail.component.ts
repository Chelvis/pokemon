import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { CatchThemAllService } from '../../services/catch-them-all/catch-them-all.service';

import { UrlToNamePipe } from './../../pipes/url-to-name/url-to-name.pipe';

import { AppComponent } from '../../app.component';
import { Pokemon } from './../../entities/pokemon-detail';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  url: any;

  pokemon: Pokemon;
  pokeId: number;

  constructor(
    private appComponent: AppComponent,
    private catchThemAllService: CatchThemAllService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private urlToNamePipe: UrlToNamePipe
  ) {
    // Executa o método loadPage() ao último evento de troca de rota
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadPage();
      }
    });
  }

  ngOnInit() {
    this.appComponent.loadingPage = true;
    this.loadPage();
  }

  // Método que carrega todos os dados da página
  loadPage() {

    // Evita que a troca de rota execute o método loadPage mais de uma vez
    const newUrl = this.activatedRoute.snapshot.url.join('/');
    if (this.url === newUrl) { return; }
    this.url = newUrl;

    // Captura o parâmetro id da url e executa os serviços de API
    this.activatedRoute.params.subscribe(params => {
      this.pokeId = params['id'] || null;
      this.runServices();
    });
  }

  // Retorna dados dos serviços de API
  runServices() {

    // Retorna os detalhes do Pokemon
    this.catchThemAllService.catchPokemon(this.pokeId).subscribe((data: Pokemon) => {
      this.pokemon = data;
      this.appComponent.setTitle(this.urlToNamePipe.transform(this.pokemon.name)); // Reescreve o page title com o nome do Pokemon
      this.appComponent.loadingPage = false; // Apaga a camada de carregamento
    }, error => {
      console.log('Error when listing pokemon\'s data, error');
    });

  }

}

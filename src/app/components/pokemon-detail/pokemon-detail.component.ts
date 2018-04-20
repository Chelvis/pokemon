import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from './../../app-routing.module';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';

import { CatchThemAllService } from '../../services/catch-them-all/catch-them-all.service';

import { UrlToNamePipe } from './../../pipes/url-to-name/url-to-name.pipe';

import { AppComponent } from '../../app.component';
import { Pokemon } from './../../entities/pokemon-detail';

import * as $ from 'jquery';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  url: any;
  showPageNotFound: boolean;

  pokemon: Pokemon; // Receberá os detalhes do Pokemon
  pokeId: number; // Receberá o id do Pokemon

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
      // Se o usuário iniciar uma troca de rota, exibe a camada de carregamento
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

    this.pokemon = null; // Reseta os detalhes de pokemon e os status do HTML
    this.showPageNotFound = false; // Apaga camada de página não encontrada

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
      this.jQueryAcordeonInit(); // Constrói os acordeons
      this.appComponent.loadingPage = false; // Apaga a camada de carregamento
    }, error => {
      if (error.status === 404) {
        this.showPageNotFound = true;
        this.appComponent.loadingPage = false; // Apaga a camada de carregamento
        return;
      }
      console.log('Error when listing pokemon\'s data, error');
    });

  }

  // Constrói os acordeons com jQuery
  jQueryAcordeonInit() {
    setTimeout(() => { // Garante que será executado após o consumo das APIs

      $('body').off('click', '.acTab'); // Previne redundância na delegação do evento

      $('body').on('click', '.acTab', function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('.acContent' + target).stop().slideToggle();
        $(this).toggleClass('ac-content-expanded');
        console.log('click');
      });

      $('.acContent').hide(); // Esconde todos os dados retráteis
    }, 50);
  }

}

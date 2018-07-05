import { JqueryFunctionsService } from './../../services/jquery-functions.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

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
  showPageNotFound: boolean;

  pokemon: Pokemon; // Receberá os detalhes do Pokemon
  pokeId: number; // Receberá o id do Pokemon

  constructor(
    private appComponent: AppComponent,
    private catchThemAllService: CatchThemAllService,
    private activatedRoute: ActivatedRoute,
    private jqueryFunctionsService: JqueryFunctionsService,
    private urlToNamePipe: UrlToNamePipe
  ) { }

  ngOnInit() {
    // Captura o parâmetro id da url e executa os serviços de API
    this.activatedRoute.params.subscribe(params => {
      this.pokeId = params['id'] || null;
      this.runServices();
    });
  }

  // Retorna dados dos serviços de API
  runServices() {

    this.pokemon = null; // Reseta os detalhes de pokemon e os status do HTML
    this.showPageNotFound = false; // Apaga camada de página não encontrada
    this.appComponent.pokemonReady = false; // Ascende a camada de carregamento

    // Retorna os detalhes do Pokemon
    this.catchThemAllService.catchPokemon(this.pokeId).subscribe((data: Pokemon) => {
      this.pokemon = data;
      this.appComponent.setTitle(this.urlToNamePipe.transform(this.pokemon.name)); // Reescreve o page title com o nome do Pokemon
      // Invoca o método que constrói e configura o acordeon nas informações do Pokémon
      this.jqueryFunctionsService.setInfoAccordion({
        callback: () => {
          this.appComponent.pokemonReady = true; // Apaga a camada de carregamento
        }
      });
    }, error => {
      if (error.status === 404) {
        this.showPageNotFound = true;
        this.appComponent.pokemonReady = true; // Apaga a camada de carregamento
        return;
      }
      console.log('Error when listing pokemon\'s data, error', error);
    });

  }



}

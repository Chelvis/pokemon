import { Pokemon } from './../../entities/pokemon-detail';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

import { PokemonList } from '../../entities/pokemon-list';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CatchThemAllService {

  constructor(private http: HttpClient) { }

  catchList(limit?: number): Observable<PokemonList[]> {
    return this.http.get<[PokemonList]>(environment.apiPokemons + (limit ? '?limit=' + limit : ''));
  }

  catch(id: number): Observable<Pokemon[]> {
    return this.http.get<[Pokemon]>(environment.apiPokemons + id);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSelectModule } from '@ng-select/ng-select';

import { HeaderComponent } from './header/header.component';
import { SelectPokemonComponent } from './select-pokemon/select-pokemon.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../app.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SelectPokemonComponent
  ],
  exports: [
    HeaderComponent,
    SelectPokemonComponent,
    RouterModule
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgSelectModule
  ]
})
export class SharedModule { }

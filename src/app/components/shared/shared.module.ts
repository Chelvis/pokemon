import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SelectPokemonComponent } from './select-pokemon/select-pokemon.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SelectPokemonComponent
  ],
  exports: [
    HeaderComponent,
    SelectPokemonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

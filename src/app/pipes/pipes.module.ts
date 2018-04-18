import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetIdFromPokeUrlPipe } from './get-id-from-poke-url/get-id-from-poke-url.pipe';
import { UrlToNamePipe } from './url-to-name/url-to-name.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GetIdFromPokeUrlPipe,
    UrlToNamePipe
  ],
  exports: [
    GetIdFromPokeUrlPipe,
    UrlToNamePipe
  ],
  providers: [UrlToNamePipe]
})
export class PipesModule { }

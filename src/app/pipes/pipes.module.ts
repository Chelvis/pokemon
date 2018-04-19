import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetIdFromPokeUrlPipe } from './get-id-from-poke-url/get-id-from-poke-url.pipe';
import { UrlToNamePipe } from './url-to-name/url-to-name.pipe';
import { ArrayToStringPipe } from './array-to-string/array-to-string.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GetIdFromPokeUrlPipe,
    UrlToNamePipe,
    ArrayToStringPipe
  ],
  exports: [
    GetIdFromPokeUrlPipe,
    UrlToNamePipe,
    ArrayToStringPipe
  ],
  providers: [
    GetIdFromPokeUrlPipe,
    UrlToNamePipe,
    ArrayToStringPipe
  ]
})
export class PipesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetIdFromPokeUrlPipe } from './get-id-from-poke-url/get-id-from-poke-url.pipe';
import { UrlToNamePipe } from './url-to-name/url-to-name.pipe';
import { ArrayToStringPipe } from './array-to-string/array-to-string.pipe';
import { NumberToDecimalPipe } from './number-to-decimal/number-to-decimal.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GetIdFromPokeUrlPipe,
    UrlToNamePipe,
    ArrayToStringPipe,
    NumberToDecimalPipe
  ],
  exports: [
    GetIdFromPokeUrlPipe,
    UrlToNamePipe,
    ArrayToStringPipe,
    NumberToDecimalPipe
  ],
  providers: [
    GetIdFromPokeUrlPipe,
    UrlToNamePipe,
    ArrayToStringPipe,
    NumberToDecimalPipe
  ]
})
export class PipesModule { }

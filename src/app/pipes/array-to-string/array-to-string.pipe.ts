import { Pipe, PipeTransform } from '@angular/core';

// Este pipe une uma array separando pela string do primeiro parâmetro e retorna em string

@Pipe({
  name: 'arrayToString'
})
export class ArrayToStringPipe implements PipeTransform {

  transform(value: any, sepator: string = ','): string {
    return value.join(sepator);
  }

}

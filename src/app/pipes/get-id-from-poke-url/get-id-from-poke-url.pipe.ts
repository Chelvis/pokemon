import { Pipe, PipeTransform } from '@angular/core';

// Este pipe é usado para extrair somente o id da url da API dos detalhes de um pokemon

@Pipe({
  name: 'getIdFromPokeUrl'
})
export class GetIdFromPokeUrlPipe implements PipeTransform {

  transform(value: string): number {
    const urlAsArray = value.split('/');
    return parseInt(urlAsArray[urlAsArray.length - 2 ], 10);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getIdFromPokeUrl'
})
export class GetIdFromPokeUrlPipe implements PipeTransform {

  transform(value: string): number {
    const urlAsArray = value.split('/');
    return parseInt(urlAsArray[urlAsArray.length - 2 ], 10);
  }

}

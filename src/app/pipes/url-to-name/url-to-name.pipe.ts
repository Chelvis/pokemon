import { Pipe, PipeTransform } from '@angular/core';

// Este pipe converte textos em formato-de-url para Capitalize case

@Pipe({
  name: 'urlToName'
})
export class UrlToNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value.charAt(0).toUpperCase() + value.slice(1)).replace('-', ' ');
  }

}

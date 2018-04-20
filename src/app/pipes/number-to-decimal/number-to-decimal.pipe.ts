import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToDecimal'
})
export class NumberToDecimalPipe implements PipeTransform {

  transform(value: number, fraction: number = 100): number {
    return value / fraction;
  }

}

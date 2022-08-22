import { Pipe, PipeTransform } from '@angular/core';
import { Iproduit } from '../stock/iproduit';

@Pipe({
  name: 'available'
})
export class AvailablePipe implements PipeTransform {

  transform(value: Iproduit[], active: boolean = true): Iproduit[] {
    if( active )
      return value.filter( (e) => e.quantity > 0 );
    
    return value;
  }

}

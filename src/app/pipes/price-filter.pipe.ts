import { Pipe, PipeTransform } from '@angular/core';
import { Iproduit } from '../components/stock/iproduit';

@Pipe({
  name: 'priceFilter',
  // pure: true // par défaut
})
export class PriceFilterPipe implements PipeTransform {

  transform(value: Iproduit[], min?: number, max?: number): Iproduit[] {

    if( max && min && max < min)
      return value;


    return value.filter( (e) => (!min || e.price >= min) && (!max || e.price <= max));
      
    // fonction fleché, version longue
    //(e) => {
    //   let included = true;

    //   if( min )
    //     included = e.price >= min
      
    //   if( max )
    //     included = included && e.price <= max;

    //   return included;
    // }

  }

}

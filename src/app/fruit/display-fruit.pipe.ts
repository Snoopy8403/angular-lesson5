import { Pipe, PipeTransform } from '@angular/core';
import { Fruit } from './fruit.model';

@Pipe({
  name: 'displayFruit',
  standalone: true
})
export class DisplayFruitPipe implements PipeTransform {

  transform(fruit: Fruit, isHeated?: boolean): string {
    if (isHeated) {
      return `${fruit.name} :(( `      
    } 
    else if (fruit.score > 5 ) {
      return `${fruit.name} :) `      
    }
    else {
      return fruit.name;
    }

  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyUppercasePipe } from './my-uppercase.pipe';
import { Fruit } from './fruit/fruit.model';
import { DisplayFruitPipe } from "./fruit/display-fruit.pipe";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, MyUppercasePipe, DisplayFruitPipe],
    providers: [DisplayFruitPipe]
})
export class AppComponent {

  text = 'Cubix Angular course';

  heatedFruits = [
    'alma',
    'narancs'
  ]

  fruits: Fruit[] = [
    {name: 'alma', score: 4},
    {name: 'banán', score: 10},
    {name: 'narancs', score: 0},
    {name: 'szilva', score: 3},
    {name: 'szőllő', score: 7},
    {name: 'barack', score: 6}
  ];

  constructor(
    private readonly displayFruitPipe: DisplayFruitPipe
  ) {
    this.pureTest();
  }

  pureTest(){
    console.log(this.displayFruitPipe.transform(this.fruits[1]));
  }
}

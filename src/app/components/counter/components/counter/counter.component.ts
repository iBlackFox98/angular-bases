import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`
  <h2>Counter: {{counter}}</h2>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset(10)">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>




  `
 })
export class CounterComponent{
  counter=10


  increaseBy(value:number):void{
    this.counter+=value;
  }

  reset(value:number):void{
    this.counter=value
  }

}

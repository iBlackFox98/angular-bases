import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[]=['Iron Man','Hulk','She-hulk','Thor','Spiderman']
  public deletedHero?:string;


  deleteLastHero(){
    this.deletedHero=  this.heroNames.pop();
  }
}

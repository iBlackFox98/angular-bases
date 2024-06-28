import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string='ironman'
  public age:number=45

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name='Capitain America'
  }

  changeAge():void{
    this.age=105
  }

  reset(){
    this.name='ironman';
    this.age=45
  }
}

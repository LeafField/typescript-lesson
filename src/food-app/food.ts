import * as Interfaces from "./interfaces";
import {Score} from "./score";
export class Food implements Interfaces.Foodable{
  constructor(public element:HTMLDivElement){
    element.addEventListener('click',this.clickEventHandler.bind(this))
  }

  clickEventHandler(){
    this.element.classList.add('food--active')
    const score = Score.getInstance()
    score.render();
  }
}

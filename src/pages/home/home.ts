import { Component } from '@angular/core';
import { NavController, reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  items = ['Apples', 'Bananas', 'Berries'];
  
  reorderItems(indexes){
      this.items = reorderArray(this.items, indexes);
  }

  

}

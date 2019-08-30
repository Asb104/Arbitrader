import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  items = [];
  numbers = [];

  constructor() {
    this.addMoreItems();
  }

  loadData(event){
    setTimeout(()=> {
      console.log('Done');
      this.addMoreItems();
      event.target.complete();
    }, 2000);
  }

  addMoreItems() {
      var counter = 0;
      for (let i=0; i<10; i++)
      this.items.push(i);
    
   
    }

  
}

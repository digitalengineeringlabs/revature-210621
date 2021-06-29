import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = []

  title:string = ''

  updateTitle(e:Event){
    this.title = (<HTMLInputElement> e.target).value
  }

  onAdd(){
    this.products.push({title:this.title})
  }

  // showAll:boolean = true
  // signal:string = 'YELLOW'

  // toggle(){
  //   this.showAll = !this.showAll
  // }
 
}

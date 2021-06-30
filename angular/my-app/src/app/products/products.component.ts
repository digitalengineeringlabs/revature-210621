import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = []

  status = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Online')
    }, 2000);
  })

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

  onDelete(title:string){
    const filtered = this.products.filter(product => product.title !== title)
    this.products = filtered
  }
 
}

import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-product',
    template: `
        <div>
        <!-- <h4 [ngStyle]="{'display':showHead()}">Product</h4> -->
       <ng-content select='[header]'></ng-content>
        <h4 [ngClass]="'highlight classic'" (click)="deleteItem()">Product</h4>

            {{product.title | uppercase | shorten:15 }}
            <br/>
            {{saleDate | date :'medium' | uppercase }}

            <ng-content select='[footer]'></ng-content>

        </div>
    `,
    styles: [`
    .highlight {
        color: red
    }
    .classic {
        background-color: #aff
    }

    `]
})
export class ProductComponent {
    @Input() product
    @Output() delete = new EventEmitter<string>()
    saleDate = new Date()

    toggle = 'none'

    ss = {backgroundColor:'#daa'}


  constructor(){
    console.log('constructor called')
  }

  ngOnInit(){
    console.log('onInit called')
    //call and API and update the products
    //make HTTP request
  }

  ngDoCheck(){
    console.log('doCheck called')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(){
    console.log('onDestroy called')
  }

    deleteItem(){
        this.delete.emit(this.product.title)
    }

    showHead(){
        return 'none'
    }
}
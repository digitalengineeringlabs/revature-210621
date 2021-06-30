import { Component } from "@angular/core";
import { ProductService } from "./products.service";


@Component({
    selector: 'app-product-list',
    template: `
    <h3>List Component</h3>
    <div *ngFor="let item of products">{{item.title}}</div>

    `

})
export class ProductListComponent {
    products = []
    service:ProductService
    constructor(svc:ProductService){
        this.service =svc
    }

    ngOnInit(){
        this.service.subject.subscribe((data)=>{
            this.products = data
        })
    }

}
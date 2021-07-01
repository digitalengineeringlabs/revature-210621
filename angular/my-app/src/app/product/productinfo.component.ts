import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: 'app-product-info',
    template: `
    <div>ProductInfo {{id}}</div>
    `
})
export class ProductInfoComponent{

    id:string
    
    constructor(private route:ActivatedRoute){}

    ngOnInit(){
        this.route.params.subscribe((params:Params)=>{
           this.id = params['id']
        })
    }

}
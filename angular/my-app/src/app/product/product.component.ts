import { Component } from "@angular/core";

@Component({
    selector: 'app-product',
    template: `
        <div>
            <h4>Product</h4>
            {{title}}
        </div>
    `
})
export class ProductComponent {
    title = 'Furniture'
}
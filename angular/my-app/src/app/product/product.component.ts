import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-product',
    template: `
        <div>
        <!-- <h4 [ngStyle]="{'display':showHead()}">Product</h4> -->
       
        <h4 [ngClass]="'highlight classic'">Product</h4>
            {{title}}
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
    @Input() title
    toggle = 'none'

    ss = {backgroundColor:'#daa'}

    showHead(){
        return 'none'
    }
}
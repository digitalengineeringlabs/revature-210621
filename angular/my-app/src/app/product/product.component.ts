import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-product',
    template: `
        <div>
        <!-- <h4 [ngStyle]="{'display':showHead()}">Product</h4> -->
       
        <h4 [ngClass]="'highlight classic'" (click)="deleteItem()">Product</h4>

            {{title | uppercase | shorten:15 }}
            <br/>
            {{saleDate | date :'medium' | uppercase }}
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
    @Output() delete = new EventEmitter<string>()
    saleDate = new Date()

    toggle = 'none'

    ss = {backgroundColor:'#daa'}

    deleteItem(){
        this.delete.emit(this.title)
    }

    showHead(){
        return 'none'
    }
}
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-park',
    template: `
        <div>
            <h3 id="park-title">{{title}}</h3>
            <button (click)="bookSite()">Book Camp Site</button>
        </div>
    `
})
export class ParkComponent {
    @Input() title:string
    @Output() book = new EventEmitter<string>()

    bookSite(){
        console.log('Emitting event...')
        this.book.emit(this.title)
    }
}
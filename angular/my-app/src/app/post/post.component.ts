import { Component, Directive, EventEmitter, Input, Output } 
from '@angular/core';

@Component({
  selector: 'app-post',
  // templateUrl: './post.component.html',
  template: `
    <div>{{title}}
    <br>
    <button (click)="onDelete($event)">Delete</button>
    </div>

  `,
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input('heading') title:string// = 'This is a sample post component'
  @Output('remove') delete = new EventEmitter<string>()
   
  
  
  show:boolean = false
  size:number = 34

  toggleDesc() {
    // this.show = this.show ? true : false
    this.show = !this.show
  }

  onDelete(e:any){
    console.log('component to be deleted '+this.title)
    this.delete.emit(this.title)
  }
}

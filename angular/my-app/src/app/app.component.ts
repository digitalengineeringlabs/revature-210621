import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  // templateUrl: './app.component.html',
  template: `
  <!-- <app-post [heading]="'Post 1'" (remove)="onDeletePost($event)"></app-post>
 <app-post [heading]="'Post 2'" (remove)="onDeletePost($event)"></app-post>
  <app-post [heading]="'Post 3'" (remove)="onDeletePost($event)"></app-post> 
  <app-product></app-product>
-->

  <!-- <app-products></app-products>
  <app-product-list></app-product-list> -->
  <!-- <app-observsample></app-observsample> -->
  <app-sample></app-sample>
  `,
  // styleUrls: ['./app.component.css']
  styles: [`
  div{
    background-color:#def
  }
  `]
})
export class AppComponent {
  title = 'my-frst-app'
  active = false
  name = 'John'
  expression = 'Test'

  onDeletePost(e:string) {
    console.log('delete post event fired' + e)
  }

  getValue(){
    return 3
  }
  
  textChange(e:any){
    this.print('some text')
    console.log('done editing...'+e.target.value)
  }

  print(txt){ 
    console.log(txt)
  }

  submit(){
    console.log('submitting form')
  }

  changeNameHandler(e:any){
    console.log(e)
   this.name = e.target.value
  }

  sayHello(){
    return 'Hi there'
  }
}

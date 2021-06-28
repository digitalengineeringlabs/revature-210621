import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './app.component.html',
  // template: `
  //   <div>
  //     {{title}}
  //     {{sayHello()}}
  //   </div>
  // `,
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

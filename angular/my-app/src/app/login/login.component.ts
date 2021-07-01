import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm:FormGroup

  ngOnInit(){
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null)
    })

    this.loginForm.valueChanges.subscribe((value)=>{
      console.log('value change '+value.username)
    })
    this.loginForm.statusChanges.subscribe((value)=>{
      console.log('status change '+value)
    })
  }

  onLoginSubmit(){
    console.log(this.loginForm)
  }

}

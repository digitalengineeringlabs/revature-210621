import { Component } from "@angular/core";

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html',
    styles: [
        `
            input.ng-invalid{
                background-color: #faa
            }
        `
    ]
})
export class SignupComponent {

    onSignupSubmit(form){
        console.log('form submitted',form)
        console.log(form.value)
       // form.setValue({username:'',email:'',password:''})
        form.reset()
    }

}
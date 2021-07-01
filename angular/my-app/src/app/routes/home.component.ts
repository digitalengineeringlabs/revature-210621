import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-home',
    template: `
    <div>
        <h3>Home</h3>
        <button (click)="navigate()">Navigate</button>
       
        <ul>
        <li *ngFor="let i of prods"> <a [routerLink]="['products',i]">Product {{i}}</a></li>
        </ul>
        <router-outlet></router-outlet>
    </div>
    `
}) 
export class HomeComponent{

    prods = [1,2,3,4]

    constructor(private router:Router){}

    navigate(){
        this.router.navigate(['/products'])
    }
}
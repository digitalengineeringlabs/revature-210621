import { Component } from "@angular/core";
import { VehiclesService } from "./vehicles.service";

@Component({
    selector: 'app-vehicles',
    template: `
        <h4>Vehicles</h4>

        <select (change)="filterItems($event)">
        <option>MPV</option>
        <option>SUV</option>
        <option>Car</option>
        </select>

        <div [ngClass]="{favourite:v.fav}" *ngFor="let v of vehicles">
        <h4>{{v.brand}} ({{v.model}})</h4>
        {{v.miles}}<br>
        <button (click)="setFavorite(v)">Yes</button>
        </div>
    `,
    styles: [
        `
        .favourite{
            background-color: #dff
        }
        `
    ]
})
export class VehiclesComponent {

    vehicles = []

    constructor(private vService:VehiclesService){

    }

    ngOnInit(){
        this.vehicles = this.vService.getVehicles()
    }

    filterItems(e){
       // console.log(e.target.value)
       this.vehicles = this.vService.filter(e.target.value)
    }

    setFavorite(v){
        this.vService.updateFav(v.brand)
    }

}
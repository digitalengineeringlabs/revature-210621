import { Component } from "@angular/core";
import { InventoryService } from "../inventory/inventory.service";
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
        <button (click)="setFavorite(v)">Yes</button><button (click)="addToInv(v)">Add to Inv</button>
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

    constructor(private vService:VehiclesService,private iService:InventoryService){

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

    addToInv(v){
        this.iService.add(v)
    }
}
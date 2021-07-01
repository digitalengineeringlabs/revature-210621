import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InventoryService{
    items = new Subject()
    temp = []

    add(vehicle){
        this.temp.push(vehicle)
        this.items.next(this.temp)
    }

    getItems(){
        return this.items
    }
}
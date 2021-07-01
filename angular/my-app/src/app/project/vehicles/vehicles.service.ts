import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class VehiclesService {
    vehicles = [
        {brand:'Audi',model:'Car',miles:20000,fav:false},
        {brand:'Toyota',model:'MPV',miles:10000,fav:false},
        {brand:'Honda',model:'Car',miles:26000,fav:false},
        {brand:'Audi',model:'SUV',miles:45000,fav:true}]

    getVehicles(){
        return this.vehicles
    }

    filter(model){
        return this.vehicles.filter(v=>v.model === model)
    }

    updateFav(brand){
        this.vehicles.forEach(v => {
            if(v.brand === brand) {
                v.fav = !v.fav
            }
        })
    }
}
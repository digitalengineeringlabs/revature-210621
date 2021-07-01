import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, Observer } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

    constructor(private router:Router){}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
        console.log('checking gaurd...')
        
        return new Observable((observer:Observer<boolean>)=>{
            observer.next(true)
            //observer.next(false)
           // this.router.navigate(['/not-found'])
        })
    }
}
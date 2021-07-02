import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  findUserById(id){
    return {id:id, name:'Mike'}
  }
}

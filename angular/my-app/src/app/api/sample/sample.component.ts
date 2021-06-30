import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sample',
  // templateUrl: './sample.component.html',
  template: `
  <h4 *ngFor="let user of users">{{user.name}}</h4>
  `,
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  users = []

  constructor(private http:HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((data:[])=>{
      this.users = data
    })
  }

}

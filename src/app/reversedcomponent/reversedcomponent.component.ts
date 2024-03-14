import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Mobile } from '../MobileEnitiy';


@Component({
  selector: 'app-reversedcomponent',
  templateUrl: './reversedcomponent.component.html',
  styleUrl: './reversedcomponent.component.css'
})
export class ReversedcomponentComponent {
  constructor(private http:HttpClient){}
   mbl : Mobile[]=[];
  ngOnInit(): void {
    this.reslistdata();
  }

  reslistdata(){
    this.http.get<Mobile[]>("http://localhost:8080/reser").
    subscribe((data: Mobile[]) => {
      this.mbl = data;
    });
  }
}
  


import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Mobile } from '../MobileEnitiy';

@Component({
  selector: 'app-listsortcomponent',
  templateUrl: './listsortcomponent.component.html',
  styleUrl: './listsortcomponent.component.css'
})
export class ListsortcomponentComponent {
  constructor(private http:HttpClient){}
  mobs: Mobile[]=[];
  ngOnInit(): void {
    this.listdata();
  }


  listdata(){
    this.http.get<Mobile[]>("http://localhost:8080/listsorts").
    subscribe((data: Mobile[]) => {
      this.mobs = data;
    });
  }

}




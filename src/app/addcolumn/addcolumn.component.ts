import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
//import { Mobile } from '../MobileEnitiy';

@Component({
  selector: 'app-addcolumn',
  templateUrl: './addcolumn.component.html',
  styleUrl: './addcolumn.component.css'
})
export class AddcolumnComponent {
  addmobs : Mobile[] = []
  constructor(private http:HttpClient) {}
  ngOnInit() : void
  {
     this.addcolumndata();
  }
  addcolumndata(): void {
    this.http.get<Mobile[]>('http://localhost:8080/addcolumn')
      .subscribe((data: Mobile[]) => {
        this.addmobs = data;
      });

  }

}
class Mobile
{
  id!:number;
  brand!:string;
  model!:number;
  price!:number;
  discount!:number;
  diss!:number;
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
class Mobile{
  id!: number;
   brand!: string;
   model!: string;
   discount!: number;
   price!: number;
}

@Component({
  selector: 'app-mobilecomponent',
  templateUrl: './mobilecomponent.component.html',
  styleUrl: './mobilecomponent.component.css'
})
export class MobilecomponentComponent implements OnInit {

  mobiles: Mobile[] = []
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.fetchMobiles();
  }

  fetchMobiles(): void {
    this.http.get<Mobile[]>('http://localhost:8080/get1')
      .subscribe((data: Mobile[]) => {
        this.mobiles = data;
      });
    }
  }

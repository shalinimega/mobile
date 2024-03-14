import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Mobile } from '../MobileEnitiy';
// import { Mobile } from '../MobileEnitiy';



@Component({
  selector: 'app-brandcomponent',
  templateUrl: './brandcomponent.component.html',
  styleUrl: './brandcomponent.component.css'
})
export class BrandcomponentComponent {
  mob: Mobile[] = []
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.fetchMobiles();
  }

  fetchMobiles(): void {
    this.http.get<Mobile[]>('http://localhost:8080/namebrand/vivo')
      .subscribe((data: Mobile[]) => {
        this.mob = data;
      });
}
}



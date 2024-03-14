import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Mobile } from '../MobileEnitiy';

@Component({
  selector: 'app-duplicatecomponent',
  templateUrl: './duplicatecomponent.component.html',
  styleUrl: './duplicatecomponent.component.css'
})
export class DuplicatecomponentComponent {
  mo: Mobile[] = []
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.brands();
  }


  brands(): void {
    this.http.get<Mobile[]>('http://localhost:8080/duplicate')
      .subscribe((data: Mobile[]) => {
        this.mo = data;
      });
}

}

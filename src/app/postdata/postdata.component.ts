import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Mobile } from '../MobileEnitiy';

@Component({
  selector: 'app-postdata',
  templateUrl: './postdata.component.html',
  styleUrl: './postdata.component.css'
})
export class PostdataComponent {
  constructor(private http:HttpClient){}
  w:Mobile=new Mobile();


  savedata(){
    this.http.post<Mobile>("http://localhost:8080/send",this.w).
     subscribe(x=>console.log(x));
     window.location.reload();

  }

}



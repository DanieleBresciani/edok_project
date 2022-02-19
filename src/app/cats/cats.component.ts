import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  catss : any;

  constructor(private http:HttpClient) {}
  
  ngOnInit() {
    let resp = this.http.get("https://catfact.ninja/fact");
    resp.subscribe((data)=>this.catss=data);
  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-travel',
  templateUrl: './search-travel.component.html',
  styleUrls: ['./search-travel.component.css']
})
export class SearchTravelComponent implements OnInit {

  localdata: any[]=[];

  ngOnInit(): void {
    const localData = localStorage.getItem('registarV');
    this.localdata = localData ? JSON.parse(localData) : [];
    console.log(localData);
  }
}
 

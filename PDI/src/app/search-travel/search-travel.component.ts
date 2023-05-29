import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
@Component({
  selector: 'app-search-travel',
  templateUrl: './search-travel.component.html',
  styleUrls: ['./search-travel.component.css']
})
export class SearchTravelComponent implements OnInit {
  constructor(public data:DataService){}
  viagemList: any[]=[];
  ngOnInit(): void {
    this.data.getViagemList().subscribe((res: any[]) => {
      this.viagemList = res;
      console.log(this.viagemList);
    });
  }
}
 

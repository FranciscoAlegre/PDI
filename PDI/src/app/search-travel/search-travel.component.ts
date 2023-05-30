import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-search-travel',
  templateUrl: './search-travel.component.html',
  styleUrls: ['./search-travel.component.css']
})
export class SearchTravelComponent implements OnInit {
  viagemList: any[] = [];

  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.data.getAllViagemList().subscribe((res: any[]) => {
      this.viagemList = res;
      console.log(this.viagemList);
    });
  }
}

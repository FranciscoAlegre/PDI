import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private router: Router) {}
  items: MenuItem[] = [];
ngOnInit(){

  this.items = [
    {
        label: 'File',
        icon: 'pi pi-fw pi-file',
      
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
       
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
       
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        
    },
    {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.logout(),
        
    }
];

}
logout() {
  
  this.router.navigate(['/login']);
}
}



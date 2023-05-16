import { Component ,OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  constructor(private router: Router) {}
  items: MenuItem[] = [];
  ngOnInit(){

    this.items = [
      {
          label: 'Início',
          icon: 'pi pi-fw pi-file',
          command: () => this.home(),
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
          label: 'Logout',
          icon: 'pi pi-fw pi-power-off',
          command: () => this.logout(),
          
      }
      
  ];
  
  }
  logout() {
    
    this.router.navigate(['/login']);
  }
  home() {
    
    this.router.navigate(['/homepage']);
  }
}

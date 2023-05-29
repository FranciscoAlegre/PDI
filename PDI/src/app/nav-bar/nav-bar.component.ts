import { Component ,OnInit} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  constructor(private auth :AuthService,private router: Router) {}
  items: MenuItem[] = [];
  ngOnInit(){

    this.items = [
      {
          label: 'Início',
          icon: 'pi pi-fw pi-home',
          command: () => this.home(),
      },
      {
          label: 'Logout',
          icon: 'pi pi-fw pi-power-off',
          command: () => this.logout(),
          
      }
      
  ];
  
  }
  logout() {
    
    this.auth.logout();
    alert('Sessão terminada com sucesso')
  }
  home() {
    
    this.router.navigate(['/homepage']);
  }
}

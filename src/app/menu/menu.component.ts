import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isAdministrador:boolean=false;
  data_user:any;
  tipo_user:any;
  ngOnInit() {
    this.data_user = localStorage.getItem('data_user');
    this.data_user = JSON.parse(this.data_user);
    this.tipo_user=this.data_user.data.tipo;
    if(this.tipo_user=="administrador"){
      this.isAdministrador=true;
    }
  }
 constructor(private UserService: UserserviceService,private router: Router){}
 
 logout() {

  this.UserService.logout().subscribe((res) => {
    localStorage.removeItem('data_user');
    this.router.navigate(['/login']);

  },
    (error) => {
      console.log("error");
    });

}
}

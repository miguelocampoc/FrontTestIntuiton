import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  data_user: any;
  preguntas:any;
  base:any;
  url_imagen:any;
  constructor(private UserService: UserserviceService, private router: Router, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.base= this.UserService.base;
    this.data_user = localStorage.getItem('data_user');
    this.data_user = JSON.parse(this.data_user);
    this.url_imagen = `${this.base}/storage/usuarios/${this.data_user.data.id}${this.data_user.data.ext}`;
    this.url_imagen = this.sanitizer.bypassSecurityTrustResourceUrl(this.url_imagen);
    this.preguntas= JSON.parse(this.data_user.data.preguntas);
    
  }
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

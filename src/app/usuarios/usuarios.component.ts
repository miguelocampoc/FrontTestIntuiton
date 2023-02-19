import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  base:any;
  usuario:any;
  preguntas_usuario:any;
  imagen_usuario:any;
  usuarios:any;
  constructor(private UserService: UserserviceService,private sanitizer: DomSanitizer){
    this.base= this.UserService.base;
  }
  ngOnInit() {
      this.UserService.GetAllUsers().subscribe((res)=>{
         this.usuarios=res;
         console.log(res);
         
      },
      (error)=>{
        console.log(error);

      }
      )
  }
  moreInfo(i:any){
    this.usuario= this.usuarios[i];
    this.preguntas_usuario= JSON.parse(this.usuario.preguntas);
    this.imagen_usuario= `${this.base}/storage/usuarios/${this.usuario.id}${this.usuario.ext}`;
    this.imagen_usuario=this.sanitizer.bypassSecurityTrustResourceUrl(this.imagen_usuario);
  }
}

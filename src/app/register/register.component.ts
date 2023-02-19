import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserserviceService } from '../userservice.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  errors:any;
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: '',
    password: '',
    cpassword:'',
  };
  preguntas=[{
    titulo:"Comida favorita",
    respuesta:""
  },
  {
    titulo:"Artista favorito",
    respuesta:""
  },
  {
    titulo:"Lugar favorito",
    respuesta:""

  },
  {
    titulo:"Color favorito",
    respuesta:""

  }

]

  fileImage: any;
  constructor(private http: HttpClient, private UserService: UserserviceService,private router:Router) { 
 
    
    

  }


  Guardar() {
    const fd = new FormData();
    fd.append('nombre', this.formData.firstName);
    fd.append('apellido', this.formData.lastName);
    fd.append('email', this.formData.email);
    fd.append('pais', this.formData.country);
    fd.append('telefono', this.formData.phone);
    fd.append('password', this.formData.password);
    fd.append('password_confirmation', this.formData.cpassword);

    fd.append('file', this.fileImage);
    fd.append('preguntas', JSON.stringify(this.preguntas));

    this.UserService.Save('v1/usuario', fd).subscribe(
      (res)=>{
        
      localStorage.setItem('data_user',JSON.stringify(res))
      this.router.navigate(['/profile']);

      },
      (err)=>{
        this.errors =err.error.errors;
        console.log(err.error.errors);
      }

    );


  }
  enviarImagen(event: any) {
    this.fileImage = event.target.files[0];
    console.log(this.fileImage);

  }


}
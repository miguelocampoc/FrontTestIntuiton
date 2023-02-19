import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public constructor(private Userservice: UserserviceService, private router: Router) {
  }
  FormData = {
    email: "",
    password: "",
    name: navigator.userAgent
  }

  submit() {
    this.Userservice.login(this.FormData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('data_user', JSON.stringify(res))
        this.router.navigate(['/profile']);

      },
      (err) => {
        console.log(err);

      }

    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserserviceService {
  api = 'http://127.0.0.1:8000/api/';
  base = ' http://127.0.0.1:8000';
  headers: any = "";
  data_user: any;
  constructor(private http: HttpClient) {}
  Save(url: any, data: any) {

    return this.http.post(this.api + url, data);

  }
  login(data: any) {
    return this.http.post(this.api + "login", data);
  }
  logout() {

    this.data_user = localStorage.getItem('data_user');
    this.data_user = JSON.parse(this.data_user);
    return this.http.get(this.api + "logout", {
      headers: { 'Authorization': 'Bearer ' + this.data_user.token }
    });

  }
  GetAllUsers() {
    this.data_user = localStorage.getItem('data_user');
    this.data_user = JSON.parse(this.data_user);
    return this.http.get(this.api + "v1/usuario", {
      headers: { 'Authorization': 'Bearer ' + this.data_user.token }
    });
  }

}



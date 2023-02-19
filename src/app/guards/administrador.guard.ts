import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorGuard implements CanActivate {
  data_user:any;
  tipo:any;
  constructor(private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.data_user = localStorage.getItem('data_user'); 
      if(typeof  this.data_user === 'string'){
      this.data_user= JSON.parse(this.data_user);
      this.tipo= this.data_user.data.tipo;
      if (this.tipo=="administrador") {
       return true;
       
      }
      this.router.navigate(['/profile']);
      return false;
    }
    this.router.navigate(['/login']);
    return false;
  }
  
}

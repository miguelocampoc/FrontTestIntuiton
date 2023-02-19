import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { LoginComponent } from './login/login.component';
import { PrivateGuard } from './guards/private.guard';
import { PublicGuard } from './guards/public.guard';
import { AdministradorGuard } from './guards/administrador.guard';

const routes: Routes = [
  { path: '', component: RegisterComponent,canActivate: [PublicGuard] },
  { path: 'register', component: RegisterComponent,canActivate: [PublicGuard]},
  { path: 'usuarios', component: UsuariosComponent, canActivate: [AdministradorGuard] },

  { path: 'profile', component: ProfileComponent,canActivate: [PrivateGuard] },
  { path: 'login', component: LoginComponent,canActivate: [PublicGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

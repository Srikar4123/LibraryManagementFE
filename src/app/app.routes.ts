import { Routes } from '@angular/router';
import { Initial } from './initial/initial';
import { AdminLogin } from './initial/admin-login/admin-login';
import { UserLogin } from './initial/user-login/user-login';
import { UserPortal } from './initial/user-login/user-portal/user-portal';
import { AdminPortal } from './initial/admin-login/admin-portal/admin-portal';

export const routes: Routes = [
  { path: '', component: Initial },
  { path: 'admin-login', component: AdminLogin },
  { path: 'user-login', component: UserLogin },
  { path: 'user-portal', component: UserPortal },
  { path: 'admin-portal', component: AdminPortal },
  { path: '**', redirectTo: '' }
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './+components/login/login.component';
import { AdminLoginComponent } from './+components/admin-login/admin-login.component';
import { AdminGuard } from './+guard/admin.guard';
import { CustomerGuard } from './+guard/customer.guard';
import { RestaurantGuard } from './+guard/restaurant.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', loadChildren: () => import('./+module/register/register.module').then(m => m.RegisterModule) },
  { path: 'admins', canMatch: [AdminGuard], loadChildren: () => import('./+module/admin/admin.module').then(m => m.AdminModule) },
  { path: 'customers', canMatch: [CustomerGuard], loadChildren: () => import('./+module/customer/customer.module').then(m => m.CustomerModule) },
  { path: 'restaurants', canMatch: [RestaurantGuard], loadChildren: () => import('./+module/restaurant/restaurant.module').then(m => m.RestaurantModule) },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

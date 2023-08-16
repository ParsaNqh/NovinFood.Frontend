import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './+components/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login', pathMatch:'full'},
  { path: 'register', loadChildren: () => import('./+module/register/register.module').then(m => m.RegisterModule) },
  { path: 'admins', loadChildren: () => import('./+module/admin/admin.module').then(m => m.AdminModule) },
  { path: 'customers', loadChildren: () => import('./+module/customer/customer.module').then(m => m.CustomerModule) },
  { path: 'restaurants', loadChildren: () => import('./+module/restaurant/restaurant.module').then(m => m.RestaurantModule) },
  {path:'**',redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

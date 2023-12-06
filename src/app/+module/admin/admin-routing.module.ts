import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './+pages/users/users.component';
import { RestaurantrequestComponent } from './+pages/restaurantrequest/restaurantrequest.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'users', component: UsersComponent },
      { path: 'restaurantrequest', component: RestaurantrequestComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';
import { MyRequestsComponent } from './+pages/+components/my-requests/my-requests.component';

const routes: Routes = [
  {
    path: '', component: RestaurantComponent, children: [
      { path: 'merequests', component: MyRequestsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }

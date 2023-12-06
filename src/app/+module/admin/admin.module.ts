import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavigationComponent } from './+pages/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UsersComponent } from './+pages/users/users.component';
import { DataGridComponent } from 'src/app/+components/+shared/data-grid/data-grid.component';
import { RestaurantrequestComponent } from './+pages/restaurantrequest/restaurantrequest.component';




@NgModule({
  declarations: [
    AdminComponent,
    NavigationComponent,
    UsersComponent,
    RestaurantrequestComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DataGridComponent
  ]
})
export class AdminModule { }

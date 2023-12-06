import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MyRequestsComponent } from './+pages/+components/my-requests/my-requests.component';
import { NewRestaurantComponent } from './+pages/+components/my-requests/new-restaurant/new-restaurant.component';
import { NavigationComponent } from './+pages/+components/navigation/navigation.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DataGridComponent } from 'src/app/+components/+shared/data-grid/data-grid.component';

@NgModule({
  declarations: [
    RestaurantComponent,
    NavigationComponent,
    MyRequestsComponent,
    NewRestaurantComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    DataGridComponent
  ]
})
export class RestaurantModule { }

import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { DataGridColumn } from 'src/app/+components/+shared/data-grid/data-grid-column';
import { RestaurantsService } from '../../+services/restaurants.service';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent extends RestaurantsService {
  dialog = inject(MatDialog)
  create() {
    const dialogRef = this.dialog.open(NewRestaurantComponent, {
    });
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.CreateRequest(result.title,result.address).subscribe(result=>{
          
        })
      }
    });
  };
  columns: DataGridColumn[] = [
    {
      field: 'title',
      title: 'نام رستوران',
      type: ''
    },
    {
      field: 'creationTime',
      title: 'زمان درخواست',
      type: ''
    },
    {
      field: 'address',
      title: 'آدرس',
      type: ''
    },

  ];

}


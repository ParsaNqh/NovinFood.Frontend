import { Component } from '@angular/core';
import { DataGridColumn } from 'src/app/+components/+shared/data-grid/data-grid-column';

@Component({
  selector: 'app-restaurantrequest',
  templateUrl: './restaurantrequest.component.html',
  styleUrls: ['./restaurantrequest.component.css']
})
export class RestaurantrequestComponent {
  columns: DataGridColumn[] = [
    {
      field: 'title',
      title: 'نام رستوران',
      type: ''
    },
    // {
    //   field: 'creationTime',
    //   title: 'زمان درخواست',
    //   type: ''
    // },
    {
      field: 'address',
      title: 'آدرس',
      type: ''
    },
    {
      field: 'ownerUsername',
      title: 'نام کاربری',
      type: ''
    },
    {
      field: 'email',
      title: 'ایمیل',
      type: 'button'
    },
    {
      field: 'fullname',
      title: 'نام درخواست دهنده',
      type: ''
    },

  ];
}

import { Component } from '@angular/core';
import { DataGridColumn } from 'src/app/+components/+shared/data-grid/data-grid-column';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  columns:DataGridColumn[]=[
    {
      field:'fullname',
      title:'نام',
      type:''
    },
    {
      field:'username',
      title:'شماره همراه',
      type:''
    },
    {
      field:'userType',
      title:'نوع',
      type:''
    },
    {
      field:'email',
      title:'پست الکترونیک',
      type:'button'
    },
    {
      field:'verified',
      title:'وضعیت',
      type:'check'
    },
  ];
  remove(row:Event){}
  edit(row:Event){}
}

import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { DataGridColumn } from './data-grid-column';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BackendService } from 'src/app/services/backend.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { RestaurantsService } from 'src/app/+module/restaurant/+pages/+services/restaurants.service';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';

@Component({
  selector: 'app-data-grid',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatButtonModule, MatCheckboxModule, MatIconModule,MatDialogModule, MatFormFieldModule, MatInputModule, MatProgressBarModule],
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent extends RestaurantsService implements OnInit {
  // constructor(private http: HttpClient) { }
  backend = inject(BackendService)
  data: any[] = [];
  loading: boolean = false;
  ngOnInit(): void {
    this.loading = true
    this.backend.myPost(this.datasource, {}).subscribe(result => {
      this.data = result as any[]
      this.loading = false
    });
  }
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
  
  @Input() datasource: string = '';
  @Input() columns: DataGridColumn[] = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Input() editable: boolean = true;
  @Input() removeable: boolean = true;
  @Input() createRestaurant: boolean = false;
}

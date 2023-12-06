import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { BackendSecurityServicesService } from './services/backend-security-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BackendSecurityServicesService{ //implements OnInit// {
  // timer = interval(1000)
  // connection: boolean | undefined;
  // ngOnInit(): void {
  //   this.timer.subscribe(() => {
  //     this.checkConnection().subscribe(r => {
  //       let result = r as any
  //       if (result.success == true) { this.connection = true }
  //       console.log(this.connection)
  //     })
  //   });
  // }

  title = 'Frontend';

}

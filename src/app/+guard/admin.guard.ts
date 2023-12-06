import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { catchError, map, of } from 'rxjs';


export const AdminGuard: CanMatchFn = (route, segments) => {
  let backend = inject(BackendService)
  if (sessionStorage.getItem('token')) {
    return backend.myGet(backend.securityAPI + 'admincheck')
      .pipe(
        map(response => response as boolean),
        catchError(error => of(false))
      )
  }
  else if (localStorage.getItem('token')) {
    return backend.myGet(backend.securityAPI + 'admincheck')
      .pipe(
        map(response => response as boolean),
        catchError(error => of(false))
      )
  }
  return false;
}

import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EnrollmentService {
  // Import the HttpClient and inject it.
  // We also need to include the module in app.module.ts
  _url = 'http://localhost:3000/enroll';
  constructor( private _http: HttpClient ) {
  }
  enroll(user: User){
    return this._http.post<any>(this._url, user)
    .pipe(catchError(this.errorHandler))
    // Post request now sends the response as observable
    // We need to subscribe to Observable in app.component.ts
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
// Server need to respond to errors after form is submitted.
// We catch errors from server in service and throw it to subscribed component Use Rxjs
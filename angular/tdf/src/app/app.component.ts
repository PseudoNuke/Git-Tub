import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue', 'D3'];
  topicHasError = true;
  submitted = false;
  userModel = new User('Kanika', 'kanika@test.com', 9999555577, 'default', 'morning', true);
  // create our own model and bind to the form
  errorMsg = '';
  validateTopic(value) {
    if (value === 'default')  {
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }
  constructor(private _enrollmentService: EnrollmentService)  {
    // We imported the EnrollmentService and injected it.
  }
  onSubmit(userForm)  {
    console.log(userForm);
    // We now call the enrollService and then subscribe to the observable
    // this.submitted = true;
    // this._enrollmentService.enroll(this.userModel)
    // .subscribe(
    //   data => console.log('Success!', data),
    //   error => this.errorMsg = error.statusText
    // )
  }
}

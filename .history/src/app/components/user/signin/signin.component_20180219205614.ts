import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username: String;
  password: String;

  constructor(
    
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    };

    if (!this.validateService.validateLogin(user)) {
      this._flashMessagesService.show('Please fill out all feilds!', { cssClass: 'alert-danger', timeout: 6000 });
    } else {
      // Login user
      this.authService.authenticateUser(user)
      .subscribe(data => {
        if (data.success === false) {
          console.log('Its false');
          this._flashMessagesService.show('User not found!', { cssClass: 'alert-danger', timeout: 6000 });
        } else {
          this.router.navigate(['/home']);
        }
      });
    }
  }

}

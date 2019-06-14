import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  welcome = 'Welcome to Admin Portal';
  login = 'If you have already an account then';
  join = 'If you are new then';
  display = 'Default';
}

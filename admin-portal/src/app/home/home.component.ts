import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.php',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  greet = 'Hello User';
  welcome = 'Welcome to Home Page';

  constructor() { }

  ngOnInit() {
  }

}

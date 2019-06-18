import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {
  logosig = 'Logo Style';
  hideclick = true;

  constructor() { }

  ngOnInit() {
  }

  hideMenu(){
    if(this.hideclick === true){
      this.hideclick = false;
    }
    else if(this.hideclick === false){
      this.hideclick = true;
    }
  }

}

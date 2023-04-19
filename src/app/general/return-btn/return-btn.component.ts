import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-return-btn',
  templateUrl: './return-btn.component.html',
  styleUrls: ['./return-btn.component.css']
})
export class ReturnBtnComponent {

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

}

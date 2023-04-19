import { Component, Input } from '@angular/core';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent {

  @Input() currentPost?: Post;

}

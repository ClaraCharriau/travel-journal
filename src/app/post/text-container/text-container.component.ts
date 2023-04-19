import { Component, Input } from '@angular/core';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-text-container',
  templateUrl: './text-container.component.html',
  styleUrls: ['./text-container.component.css']
})
export class TextContainerComponent {

  @Input() text?: string;
  @Input() title?: string;

}

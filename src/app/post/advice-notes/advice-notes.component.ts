import { Component, Input } from '@angular/core';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-advice-notes',
  templateUrl: './advice-notes.component.html',
  styleUrls: ['./advice-notes.component.css']
})
export class AdviceNotesComponent {

  @Input() currentPost?: Post;

}

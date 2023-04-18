import { Component, Input } from '@angular/core';
import { Post } from 'src/app/post';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {

  @Input() currentPost?: Post;

}

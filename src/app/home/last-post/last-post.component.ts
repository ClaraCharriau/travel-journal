import { Component } from '@angular/core';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-last-post',
  templateUrl: './last-post.component.html',
  styleUrls: ['./last-post.component.css']
})
export class LastPostComponent {

  currentPost?: Post;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getCurrentPost();
  }

  getCurrentPost(): void {
    this.currentPost = this.postService.getHighlightPost();
  }

}

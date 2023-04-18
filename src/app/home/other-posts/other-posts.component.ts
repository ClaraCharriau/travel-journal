import { Component } from '@angular/core';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-other-posts',
  templateUrl: './other-posts.component.html',
  styleUrls: ['./other-posts.component.css']
})
export class OtherPostsComponent {

  posts?: Post[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts = this.getAllOtherPosts();
  }

  getAllOtherPosts(): Post[] {
    return this.postService.getOtherPosts();
  }

}

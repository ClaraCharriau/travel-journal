import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  currentPost?: Post;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCurrentPost();
  }

  getCurrentPost() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.currentPost = this.postService.getPost(id);
  }

}

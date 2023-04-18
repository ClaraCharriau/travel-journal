import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  currentPost?: Post;
  description?: string;
  summary?: string;

  descriptionTitle: string = "Le voyage";
  summaryTitle: string = "En résumé";

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.getCurrentPost();
    this.description = this.currentPost?.description;
    this.summary = this.currentPost?.summary;
  }

  getCurrentPost() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.currentPost = this.postService.getPost(id);
  }

}

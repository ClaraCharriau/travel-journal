import { Injectable } from '@angular/core';
import { Post } from 'src/app/post';
import { POSTS } from 'src/mock/post-detail.mock';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAllPosts(): Post[] {
    return POSTS;
  }

  getPost(id: number): Post | undefined {
    return POSTS.find(post => post.id === id);
  }

  getHighlightPost(): Post | undefined {
    return POSTS.find(post => post.highlightTravel);
  }

  getOtherPosts(): Post[] {
    return POSTS.filter(post => !post.highlightTravel);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): any{
    return this.http.get("http://localhost:3000/posts");
  }

  postMensagem(post: Post): any{
    return this.http.post("http://localhost:3000/posts",post);
  }
}

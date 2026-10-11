import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Post[]>('https://localhost:7036/api/post').subscribe(data => {
      this.posts = data;
    });
  }
}

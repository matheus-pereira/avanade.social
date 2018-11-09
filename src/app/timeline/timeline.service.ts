import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TimelineService {

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>('http://localhost:3000/posts');
  }

}
